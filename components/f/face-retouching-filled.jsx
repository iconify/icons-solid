import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdjuwtb7o.css';
import '../../css/r/r-t90pbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdjuwtb7o"/><path class="r-t90pbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:face-retouching-filled"} {...others} />);
}

export default Component;
