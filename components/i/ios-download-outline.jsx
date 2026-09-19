import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eie4uo28e.css';
import '../../css/g/gn89h9b-t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="eie4uo28e"/><path class="gn89h9b-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-download-outline"} {...others} />);
}

export default Component;
