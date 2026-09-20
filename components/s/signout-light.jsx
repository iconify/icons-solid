import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t5g1yj-up.css';
import '../../css/v/vv-w0sjvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t5g1yj-up"/><path class="vv-w0sjvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signout-light"} {...others} />);
}

export default Component;
