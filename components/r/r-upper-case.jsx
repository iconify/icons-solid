import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-ixh8fnt.css';

const viewBox = {"width":471,"height":735};
const content = `<path class="u-ixh8fnt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:r-upper-case"} {...others} />);
}

export default Component;
