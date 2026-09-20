import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lm5qi0b5y.css';
import '../../css/b/b8rqfo09d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lm5qi0b5y"/><path class="b8rqfo09d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tube-diagonal-two-tone"} {...others} />);
}

export default Component;
