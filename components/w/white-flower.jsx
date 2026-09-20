import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/znhfbn_ob.css';
import '../../css/g/gnhfw5brp.css';
import '../../css/s/soy33xbxd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/s/smq-tk8nf.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGua6c3bQj" class="znhfbn_ob"/><path id="SVGvjoXbdld" class="gnhfw5brp"/><path id="SVG1o1BXbPu" class="soy33xbxd"/></defs><g class="jn8qy4bru"><use href="#SVGua6c3bQj"/><use href="#SVGvjoXbdld"/><use href="#SVG1o1BXbPu"/></g><g class="smq-tk8nf"><use href="#SVGua6c3bQj"/><use href="#SVGvjoXbdld"/><use href="#SVG1o1BXbPu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-flower"} {...others} />);
}

export default Component;
