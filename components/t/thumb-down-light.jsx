import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q23-jybty.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q23-jybty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:thumb-down-light"} {...others} />);
}

export default Component;
