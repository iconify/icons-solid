import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjckms-gm.css';
import '../../css/w/wpmkoacem.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kjckms-gm"/><path class="wpmkoacem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signin-alt-light"} {...others} />);
}

export default Component;
