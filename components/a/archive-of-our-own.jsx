import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uuyvh2sic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uuyvh2sic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:archive-of-our-own"} {...others} />);
}

export default Component;
