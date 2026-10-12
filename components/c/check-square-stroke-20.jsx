import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrh0vqtny.css';
import '../../css/q/qen7bk-jg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hrh0vqtny"/><path class="qen7bk-jg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:check-square-stroke-20"} {...others} />);
}

export default Component;
