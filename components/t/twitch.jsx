import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axftgxx0p.css';

const viewBox = {"width":1600,"height":1664};
const content = `<path class="axftgxx0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:twitch"} {...others} />);
}

export default Component;
