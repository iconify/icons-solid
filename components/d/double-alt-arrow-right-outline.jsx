import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sq4vm8b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="sq4vm8b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-right-outline"} {...others} />);
}

export default Component;
