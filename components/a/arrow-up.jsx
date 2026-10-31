import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8z4-hb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8z4-hb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"struq:arrow-up"} {...others} />);
}

export default Component;
