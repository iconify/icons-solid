import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/h/h2soecb5f.css';
import '../../css/d/dd31v6-8e.css';
import '../../css/v/vz4se0bdu.css';
import '../../css/c/cq3rr0bja.css';
import '../../css/j/jimly_bgj.css';
import '../../css/u/u_tt6nkhp.css';
import '../../css/i/io-taacnd.css';
import '../../css/z/z9p76jb0a.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="h2soecb5f"/><path class="dd31v6-8e"/><path class="vz4se0bdu"/><path class="cq3rr0bja"/><path class="jimly_bgj"/><path class="u_tt6nkhp"/><path class="io-taacnd"/><path class="z9p76jb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:education-degree"} {...others} />);
}

export default Component;
