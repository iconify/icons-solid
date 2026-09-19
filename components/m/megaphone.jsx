import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w4hs4hvwr.css';

const viewBox = {"width":520,"height":464};
const content = `<path class="w4hs4hvwr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:megaphone"} {...others} />);
}

export default Component;
