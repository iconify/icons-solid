import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i43r0eb1n.css';
import '../../css/y/y3rmrqmdo.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="i43r0eb1n"/><path class="y3rmrqmdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:white-medium-square"} {...others} />);
}

export default Component;
