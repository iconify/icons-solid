import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw4tq_q9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hw4tq_q9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:dial-pad-finger-2-solid"} {...others} />);
}

export default Component;
