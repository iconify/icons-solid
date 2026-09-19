import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv2q-whaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iv2q-whaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:left-2-short-arrow"} {...others} />);
}

export default Component;
