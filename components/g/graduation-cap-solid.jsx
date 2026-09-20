import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx6-67b-c.css';
import '../../css/h/hk-cwxbdt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nx6-67b-c"/><path class="hk-cwxbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:graduation-cap-solid"} {...others} />);
}

export default Component;
