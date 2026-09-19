import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alqc54g4m.css';
import '../../css/r/rn2kcz5al.css';
import '../../css/e/eo3krlb4g.css';
import '../../css/g/gnea6-e5v.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="alqc54g4m"/><circle class="rn2kcz5al"/><path class="eo3krlb4g"/><path class="gnea6-e5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:joystick-alt"} {...others} />);
}

export default Component;
