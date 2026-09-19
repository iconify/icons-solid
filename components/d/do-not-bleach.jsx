import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trmplo9ub.css';

const viewBox = {"width":480,"height":512};
const content = `<path class="trmplo9ub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:do-not-bleach"} {...others} />);
}

export default Component;
