import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjn2x4nmf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cjn2x4nmf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:meat-pepper-filled"} {...others} />);
}

export default Component;
