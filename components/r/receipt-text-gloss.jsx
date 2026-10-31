import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a1af6gbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a1af6gbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:receipt-text-gloss"} {...others} />);
}

export default Component;
