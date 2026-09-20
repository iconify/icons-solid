import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh_1t7rje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jh_1t7rje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:firefox-browser"} {...others} />);
}

export default Component;
