import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/p/pqhsoxche.css';
import '../../css/p/p07258__w.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="pqhsoxche"/><path class="p07258__w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:nuclear-2"} {...others} />);
}

export default Component;
