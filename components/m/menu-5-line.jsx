import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jgb2-fblw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jgb2-fblw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:menu-5-line"} {...others} />);
}

export default Component;
