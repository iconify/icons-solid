import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jliwh3b-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jliwh3b-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:usergroup-circle-filled"} {...others} />);
}

export default Component;
