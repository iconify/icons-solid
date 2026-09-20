import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lt9f0cb0i.css';
import '../../css/b/brrdf9bhm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lt9f0cb0i"/><path class="brrdf9bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:spoon"} {...others} />);
}

export default Component;
