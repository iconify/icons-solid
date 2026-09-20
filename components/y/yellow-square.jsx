import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csh1a7bzc.css';
import '../../css/t/tbzab391z.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="csh1a7bzc"/><path class="tbzab391z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:yellow-square"} {...others} />);
}

export default Component;
