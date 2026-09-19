import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0z4jk4ef.css';
import '../../css/d/dbsjb5b_u.css';
import '../../css/l/lzvh4scbg.css';
import '../../css/c/cd3dpacbb.css';

const viewBox = {"width":512,"height":512};
const content = `<ellipse class="s0z4jk4ef"/><path class="dbsjb5b_u"/><path class="lzvh4scbg"/><path class="cd3dpacbb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ringingbell"} {...others} />);
}

export default Component;
