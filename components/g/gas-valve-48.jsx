import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ou-cxiblp.css';
import '../../css/j/jheawubao.css';
import '../../css/h/h1a11qb_c.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ou-cxiblp"/><path class="jheawubao"/><path class="h1a11qb_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:gas-valve-48"} {...others} />);
}

export default Component;
