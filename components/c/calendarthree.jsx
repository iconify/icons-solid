import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ivs3jibks.css';

const viewBox = {"width":960,"height":1024};
const content = `<path class="ivs3jibks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:calendarthree"} {...others} />);
}

export default Component;
