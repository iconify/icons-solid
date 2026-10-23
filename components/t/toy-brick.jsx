import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e53o5ubcl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e53o5ubcl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:toy-brick"} {...others} />);
}

export default Component;
