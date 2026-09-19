import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/twvoxbcrk.css';

const viewBox = {"width":2048,"height":1408};
const content = `<path class="twvoxbcrk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:leanpub"} {...others} />);
}

export default Component;
