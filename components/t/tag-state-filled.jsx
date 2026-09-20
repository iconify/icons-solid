import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5s7lcbme.css';
import '../../css/p/phlx78bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5s7lcbme"/><path class="phlx78bqf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tag-state-filled"} {...others} />);
}

export default Component;
