import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6q8vjbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6q8vjbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:view-columns-line"} {...others} />);
}

export default Component;
