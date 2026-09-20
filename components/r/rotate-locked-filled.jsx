import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no0_jw34d.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="no0_jw34d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:rotate-locked-filled"} {...others} />);
}

export default Component;
