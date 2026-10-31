import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yx-md1bnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yx-md1bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:save-gloss"} {...others} />);
}

export default Component;
