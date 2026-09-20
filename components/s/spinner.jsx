import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ihrl0fbrp.css';
import '../../css/l/l31-rpb2b.css';
import '../../css/f/f7el6mb9v.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ihrl0fbrp"/><circle class="l31-rpb2b"/><path class="f7el6mb9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:spinner"} {...others} />);
}

export default Component;
