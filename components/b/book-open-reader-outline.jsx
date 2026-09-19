import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulo96v91w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulo96v91w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:book-open-reader-outline"} {...others} />);
}

export default Component;
