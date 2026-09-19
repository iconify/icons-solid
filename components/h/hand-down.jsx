import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr80_bo_v.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="gr80_bo_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:hand-down"} {...others} />);
}

export default Component;
