import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z08gxnbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z08gxnbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:glasses-gloss"} {...others} />);
}

export default Component;
