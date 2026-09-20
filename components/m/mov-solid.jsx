import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nbr-kl8vw.css';
import '../../css/j/j7zcxhbcw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="nbr-kl8vw"/><path clip-rule="evenodd" class="j7zcxhbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:mov-solid"} {...others} />);
}

export default Component;
