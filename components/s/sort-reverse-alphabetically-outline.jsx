import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/surswrb5k.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="surswrb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:sort-reverse-alphabetically-outline"} {...others} />);
}

export default Component;
