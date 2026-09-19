import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba8_jhblq.css';

const viewBox = {"width":2304,"height":1280};
const content = `<path class="ba8_jhblq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:audio-description"} {...others} />);
}

export default Component;
