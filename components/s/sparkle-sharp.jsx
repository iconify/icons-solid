import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl5ni9bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zl5ni9bgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sparkle-sharp"} {...others} />);
}

export default Component;
