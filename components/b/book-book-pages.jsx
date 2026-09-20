import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ab950u94t.css';
import '../../css/a/apws9tbfu.css';
import '../../css/f/f7-jp6egq.css';
import '../../css/j/j3-b8sc1d.css';
import '../../css/h/hg0-5obwt.css';
import '../../css/h/h7yay0msc.css';
import '../../css/b/bh7yce0fg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ab950u94t"/><path class="apws9tbfu"/><path class="f7-jp6egq"/><path class="j3-b8sc1d"/><path class="hg0-5obwt"/><path class="h7yay0msc"/><path class="bh7yce0fg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:book-book-pages"} {...others} />);
}

export default Component;
