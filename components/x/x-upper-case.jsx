import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r87ynzzcg.css';

const viewBox = {"width":548,"height":735};
const content = `<path class="r87ynzzcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:x-upper-case"} {...others} />);
}

export default Component;
