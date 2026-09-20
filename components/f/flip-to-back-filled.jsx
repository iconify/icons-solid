import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m363_p6yk.css';
import '../../css/q/q9ju5jb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m363_p6yk"/><path class="q9ju5jb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:flip-to-back-filled"} {...others} />);
}

export default Component;
