import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e65otkb-a.css';
import '../../css/g/glbd4gcqi.css';
import '../../css/m/me78i_0yg.css';
import '../../css/g/g0ayah46a.css';
import '../../css/g/g5d6z9bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e65otkb-a"/><path class="glbd4gcqi"/><path class="me78i_0yg"/><path class="g0ayah46a"/><path class="g5d6z9bnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:fluid"} {...others} />);
}

export default Component;
