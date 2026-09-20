import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6o9acb6w.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="c6o9acb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:badge-promotion-filled"} {...others} />);
}

export default Component;
