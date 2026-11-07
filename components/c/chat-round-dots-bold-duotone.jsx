import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ije5jlbjh.css';
import '../../css/f/fvfljmboy.css';
import '../../css/b/bj7uuyqyo.css';
import '../../css/q/qk12x8byc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ije5jlbjh"/><path class="fvfljmboy"/><path class="bj7uuyqyo"/><path class="qk12x8byc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chat-round-dots-bold-duotone"} {...others} />);
}

export default Component;
