import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4aitobkj.css';
import '../../css/w/w33pk5bec.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="n4aitobkj"/><path class="w33pk5bec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:text-search-48-bold"} {...others} />);
}

export default Component;
