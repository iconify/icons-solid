import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s04m4zjux.css';
import '../../css/j/jlzxp4qwe.css';
import '../../css/q/qtt4sxbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s04m4zjux"><path class="jlzxp4qwe"/><ellipse class="qtt4sxbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:01dotai"} {...others} />);
}

export default Component;
