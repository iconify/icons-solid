import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w36eivbky.css';
import '../../css/i/isad52bmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w36eivbky"/><path class="isad52bmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:wallet-3"} {...others} />);
}

export default Component;
