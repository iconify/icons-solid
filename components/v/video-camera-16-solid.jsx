import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aomy0cbes.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="aomy0cbes"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:video-camera-16-solid"} {...others} />);
}

export default Component;
