import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x9p-qcktk.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="x9p-qcktk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:thumbnail-view-mirrored"} {...others} />);
}

export default Component;
