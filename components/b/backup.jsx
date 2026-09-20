import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zjlx72b5f.css';
import '../../css/h/hyxdxwsmj.css';
import '../../css/g/grur7igsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zjlx72b5f"/><path clip-rule="evenodd" class="hyxdxwsmj"/><path class="grur7igsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:backup"} {...others} />);
}

export default Component;
