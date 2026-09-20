import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehxg8b96x.css';
import '../../css/y/yhh61y7yb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="ehxg8b96x"/><path clip-rule="evenodd" class="yhh61y7yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:angular-solid"} {...others} />);
}

export default Component;
