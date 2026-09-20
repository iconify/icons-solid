import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v06x-3-pj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v06x-3-pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:git-pull-request-filled"} {...others} />);
}

export default Component;
