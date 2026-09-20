import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3epa78jl.css';
import '../../css/b/b11srpowt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y3epa78jl"/><path class="b11srpowt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:town-filled"} {...others} />);
}

export default Component;
