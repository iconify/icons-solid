import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy-_l3b8b.css';
import '../../css/c/cy63lm71v.css';
import '../../css/h/h5dyhebiq.css';
import '../../css/d/dw16tac2m.css';
import '../../css/y/ypbt8hbai.css';
import '../../css/h/hw37-wp4l.css';
import '../../css/q/qfpjec8le.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oy-_l3b8b"/><path class="cy63lm71v"/><path class="h5dyhebiq"/><path class="dw16tac2m"/><path class="ypbt8hbai"/><path class="hw37-wp4l"/><path class="qfpjec8le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:npm"} {...others} />);
}

export default Component;
