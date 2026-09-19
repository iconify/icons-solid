import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2zjwor-m.css';
import '../../css/t/tc57l1bxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e2zjwor-m"/><path class="tc57l1bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:doveofpeace"} {...others} />);
}

export default Component;
