import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zddt3ibfx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zddt3ibfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:trash-simple-bold"} {...others} />);
}

export default Component;
