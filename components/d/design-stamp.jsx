import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2smo5btm.css';
import '../../css/k/k52gxob7f.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h2smo5btm"/><path class="k52gxob7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-stamp"} {...others} />);
}

export default Component;
