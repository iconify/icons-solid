import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/samvw5boj.css';
import '../../css/e/epl0f9bta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="samvw5boj"/><path clip-rule="evenodd" class="epl0f9bta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-heart-bold"} {...others} />);
}

export default Component;
