import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ukvws-bxw.css';
import '../../css/y/ysc-gs3pu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ukvws-bxw"/><path class="ysc-gs3pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-update"} {...others} />);
}

export default Component;
