import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ib3rsc9pe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ib3rsc9pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:android-watch"} {...others} />);
}

export default Component;
