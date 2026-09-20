import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9uy85bkb.css';
import '../../css/h/hw50cc_wu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x9uy85bkb"/><path class="hw50cc_wu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:mailbox-full-light"} {...others} />);
}

export default Component;
