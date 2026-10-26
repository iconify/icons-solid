import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_b5g604s.css';
import '../../css/c/c3p99coiz.css';

const viewBox = {"width":263.33,"height":173.53};
const content = `<path class="y_b5g604s"/><ellipse class="c3p99coiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:rybbit-light"} {...others} />);
}

export default Component;
