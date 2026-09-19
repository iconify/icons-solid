import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xffjfs7fd.css';
import '../../css/l/ldwjonb-f.css';
import '../../css/q/q0e0esbtj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xffjfs7fd"/><path class="ldwjonb-f"/><path class="q0e0esbtj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:image-store-local"} {...others} />);
}

export default Component;
