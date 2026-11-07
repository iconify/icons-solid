import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u41r5aczw.css';
import '../../css/u/umyvzfuaq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u41r5aczw"/><path class="umyvzfuaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:question-mark-outline"} {...others} />);
}

export default Component;
