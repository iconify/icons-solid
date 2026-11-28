import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jolpr0egc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jolpr0egc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:parking-meter-solid"} {...others} />);
}

export default Component;
