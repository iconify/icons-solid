import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ub9sfq3xt.css';
import '../../css/m/mkx79kbti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ub9sfq3xt"/><path class="mkx79kbti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pencil-writing"} {...others} />);
}

export default Component;
