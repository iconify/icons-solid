import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jr41qglch.css';
import '../../css/y/yph1tgb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jr41qglch"/><path class="yph1tgb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-left-stroke-circle-half"} {...others} />);
}

export default Component;
