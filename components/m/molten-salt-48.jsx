import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ie-wxdblp.css';
import '../../css/x/xl5sv-boc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ie-wxdblp"/><path class="xl5sv-boc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:molten-salt-48"} {...others} />);
}

export default Component;
