import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mkghurbjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mkghurbjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:up-left-2-short-arrow"} {...others} />);
}

export default Component;
