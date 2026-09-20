import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbmrsk3fx.css';
import '../../css/j/j6obuxyij.css';
import '../../css/b/bzjv-qblr.css';
import '../../css/v/vw4rffb2d.css';
import '../../css/t/tegebqb_i.css';
import '../../css/n/n3yiwgkrd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/ag7xtj-0c.css';
import '../../css/k/knukugzqi.css';
import '../../css/x/xkukohvjy.css';
import '../../css/p/paifx231y.css';
import '../../css/t/t8fgvvbkb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nbmrsk3fx"/><path class="j6obuxyij"/><path class="bzjv-qblr"/><path class="vw4rffb2d"/><path class="tegebqb_i"/><path class="n3yiwgkrd"/><g class="jn8qy4bru"><path class="ag7xtj-0c"/><path class="knukugzqi"/><path class="xkukohvjy"/><path class="paifx231y"/><path class="t8fgvvbkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:hanging-gardens-of-babylon"} {...others} />);
}

export default Component;
