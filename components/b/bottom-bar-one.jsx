import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb70uhhrd.css';

const viewBox = {"width":49,"height":48};
const content = `<path class="tb70uhhrd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:bottom-bar-one"} {...others} />);
}

export default Component;
