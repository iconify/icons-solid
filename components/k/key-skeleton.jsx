import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kaok-xlkj.css';
import '../../css/h/h5ggh0boy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kaok-xlkj"/><path class="h5ggh0boy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:key-skeleton"} {...others} />);
}

export default Component;
