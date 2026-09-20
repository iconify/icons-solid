import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-hvtj13o.css';
import '../../css/n/nfzvdkovf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="g-hvtj13o"/><path class="nfzvdkovf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:folders-solid"} {...others} />);
}

export default Component;
