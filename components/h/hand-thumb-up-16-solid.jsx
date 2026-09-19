import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh5w-s1iw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sh5w-s1iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:hand-thumb-up-16-solid"} {...others} />);
}

export default Component;
