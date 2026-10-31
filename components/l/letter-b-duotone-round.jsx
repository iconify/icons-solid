import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr17lu3bn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr17lu3bn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-b-duotone-round"} {...others} />);
}

export default Component;
