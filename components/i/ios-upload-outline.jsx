import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eie4uo28e.css';
import '../../css/n/n_2ctgbqg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eie4uo28e"/><path class="n_2ctgbqg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-upload-outline"} {...others} />);
}

export default Component;
