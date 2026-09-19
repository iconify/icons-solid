import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fuovarokt.css';
import '../../css/a/a7aem3bxi.css';
import '../../css/b/bmz5ad5yw.css';
import '../../css/e/eso0ty__n.css';
import '../../css/b/b38rdkboh.css';
import '../../css/j/jxb3x230a.css';
import '../../css/i/is3vbmbxh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="fuovarokt"/><path class="a7aem3bxi"/><path class="bmz5ad5yw"/><path class="eso0ty__n"/><path class="b38rdkboh"/><path class="jxb3x230a"/><path class="is3vbmbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hamburger"} {...others} />);
}

export default Component;
