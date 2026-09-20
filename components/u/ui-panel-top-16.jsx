import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/laaq2cmmd.css';
import '../../css/g/g948z0bkd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="laaq2cmmd"/><path clip-rule="evenodd" class="g948z0bkd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:ui-panel-top-16"} {...others} />);
}

export default Component;
