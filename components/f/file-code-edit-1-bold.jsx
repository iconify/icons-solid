import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a8jy0fbhv.css';
import '../../css/f/f76v0rbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a8jy0fbhv"/><path class="f76v0rbmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:file-code-edit-1-bold"} {...others} />);
}

export default Component;
