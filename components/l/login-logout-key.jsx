import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/imsx-ccnl.css';
import '../../css/m/mhlk-yk0g.css';
import '../../css/q/qlym9ynfh.css';
import '../../css/d/dh1e8r96h.css';
import '../../css/o/o4xjmgb4w.css';
import '../../css/a/a-544y-jj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="imsx-ccnl"/><path clip-rule="evenodd" class="mhlk-yk0g"/><g clip-path="url(#SVGHOyfqbRi)" class="qlym9ynfh"><path class="dh1e8r96h"/></g><path class="o4xjmgb4w"/><defs><clipPath id="SVGHOyfqbRi"><path class="a-544y-jj"/></clipPath></defs></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:login-logout-key"} {...others} />);
}

export default Component;
