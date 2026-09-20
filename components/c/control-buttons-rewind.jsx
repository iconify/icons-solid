import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x41tnzk-s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x41tnzk-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:control-buttons-rewind"} {...others} />);
}

export default Component;
