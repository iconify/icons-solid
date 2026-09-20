import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ru_ztdbjh.css';
import '../../css/p/pnudnz5ri.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ru_ztdbjh"/><path class="pnudnz5ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-windows"} {...others} />);
}

export default Component;
