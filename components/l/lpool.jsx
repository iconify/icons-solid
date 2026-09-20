import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pj38x5bhy.css';
import '../../css/j/jd18gacdn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pj38x5bhy"/><path class="jd18gacdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lpool"} {...others} />);
}

export default Component;
