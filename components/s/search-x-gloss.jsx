import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dc34w8bly.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dc34w8bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:search-x-gloss"} {...others} />);
}

export default Component;
