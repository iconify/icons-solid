import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ubqvv0hqj.css';
import '../../css/d/d1fhs3bbv.css';
import '../../css/i/if869vbfn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ubqvv0hqj"/><path class="d1fhs3bbv"/><path class="if869vbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:snail"} {...others} />);
}

export default Component;
