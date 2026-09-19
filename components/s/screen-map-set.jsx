import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gkb7xobyc.css';
import '../../css/a/avbzggl1s.css';
import '../../css/l/l6u_258ql.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gkb7xobyc"/><path class="avbzggl1s"/><path class="l6u_258ql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:screen-map-set"} {...others} />);
}

export default Component;
