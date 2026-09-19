import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/abk0q70qq.css';
import '../../css/z/zo9u541zc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path clip-rule="evenodd" class="abk0q70qq"/><path class="zo9u541zc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:hanger"} {...others} />);
}

export default Component;
