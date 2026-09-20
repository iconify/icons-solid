import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h7gtsxy4k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h7gtsxy4k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:trend-arrow-up-light"} {...others} />);
}

export default Component;
