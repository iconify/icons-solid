import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eruo3-fxx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eruo3-fxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:burger-classic-duotone"} {...others} />);
}

export default Component;
