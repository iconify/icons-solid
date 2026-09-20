import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d13zbfbdn.css';
import '../../css/x/xyyi6pxjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d13zbfbdn"/><path class="xyyi6pxjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:remove-from-library-fill"} {...others} />);
}

export default Component;
