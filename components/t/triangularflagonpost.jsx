import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqep0jbwj.css';
import '../../css/h/hp_5vub9p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dqep0jbwj"/><path class="hp_5vub9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:triangularflagonpost"} {...others} />);
}

export default Component;
