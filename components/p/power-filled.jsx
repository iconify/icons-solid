import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rotxfmb0f.css';
import '../../css/e/ekbk75bau.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rotxfmb0f"/><path class="ekbk75bau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:power-filled"} {...others} />);
}

export default Component;
