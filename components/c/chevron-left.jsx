import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y1dfrij3o.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="y1dfrij3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:chevron-left"} {...others} />);
}

export default Component;
