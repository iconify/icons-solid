import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g44ax6v6c.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/w/w151_7bte.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="g44ax6v6c"/><path class="ihmii9b0s"/><path class="w151_7bte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:furnace-48-bold"} {...others} />);
}

export default Component;
