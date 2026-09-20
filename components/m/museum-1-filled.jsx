import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni_p_obvb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ni_p_obvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:museum-1-filled"} {...others} />);
}

export default Component;
