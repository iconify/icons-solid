import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-6i0-bpe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h-6i0-bpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-category"} {...others} />);
}

export default Component;
