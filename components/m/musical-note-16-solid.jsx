import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fh3vw6hqx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fh3vw6hqx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:musical-note-16-solid"} {...others} />);
}

export default Component;
