import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdq557ezd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tdq557ezd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:thumbs-down-filled"} {...others} />);
}

export default Component;
