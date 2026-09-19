import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi79zfbkw.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uy2avybbl.css';
import '../../css/j/jgz7x0rht.css';
import '../../css/l/l5nn2tbzk.css';
import '../../css/w/w4e66ln-y.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><clipPath id="SVGQt7wRdNv"><path class="vi79zfbkw"/></clipPath></defs><g clip-path="url(#SVGQt7wRdNv)" transform="scale(.722)" class="d2kvgvbvc"><path class="uy2avybbl"/><path class="jgz7x0rht"/><path class="l5nn2tbzk"/><path class="w4e66ln-y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:cl-1x1"} {...others} />);
}

export default Component;
