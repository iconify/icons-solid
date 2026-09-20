import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm0xz1bkr.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tm0xz1bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:link-filled"} {...others} />);
}

export default Component;
