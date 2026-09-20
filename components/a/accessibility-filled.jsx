import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy31_s20a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy31_s20a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:accessibility-filled"} {...others} />);
}

export default Component;
