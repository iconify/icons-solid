import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qr9y3zfcj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qr9y3zfcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-2-gloss"} {...others} />);
}

export default Component;
