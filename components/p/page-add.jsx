import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lots55p-n.css';
import '../../css/p/psm-cjbgb.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="lots55p-n"/><path class="psm-cjbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-add"} {...others} />);
}

export default Component;
