import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-3x4kwuu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-3x4kwuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:text-align-center"} {...others} />);
}

export default Component;
