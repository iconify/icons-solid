import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/b/bf-f_-b3a.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4jsuonxq.css';
import '../../css/y/yrsmebbsu.css';
import '../../css/w/wdfyv4b9k.css';
import '../../css/y/y-9jjbcku.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGLd84LdPD" class="n1mjunbsu"><path class="bf-f_-b3a"/></mask><g class="ft5dv1b6b"><circle class="i4jsuonxq"/><path class="yrsmebbsu"/><path class="wdfyv4b9k"/><path mask="url(#SVGLd84LdPD)" class="y-9jjbcku"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:lock-window"} {...others} />);
}

export default Component;
