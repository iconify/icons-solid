import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x2k-pbckj.css';
import '../../css/y/yyffa3bjo.css';
import '../../css/u/u3620mbgy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x2k-pbckj"/><path class="yyffa3bjo"/><path class="u3620mbgy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:bill-4"} {...others} />);
}

export default Component;
