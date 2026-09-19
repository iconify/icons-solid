import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgpzimtyu.css';
import '../../css/b/b3jg8vbmj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hgpzimtyu"/><path class="b3jg8vbmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-violin-plot"} {...others} />);
}

export default Component;
