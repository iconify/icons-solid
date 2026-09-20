import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k4s-dik0d.css';
import '../../css/f/f27hbqb1o.css';
import '../../css/l/laqhat8lm.css';
import '../../css/s/sy5uef4ax.css';
import '../../css/i/ihqpztbwp.css';
import '../../css/h/hpd5xeb9k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="k4s-dik0d"/><path class="f27hbqb1o"/><path class="laqhat8lm"/><path class="sy5uef4ax"/><path class="ihqpztbwp"/><path class="hpd5xeb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-certified-diploma"} {...others} />);
}

export default Component;
