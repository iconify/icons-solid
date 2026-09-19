import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w62ry_euj.css';
import '../../css/h/hgpzimtyu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w62ry_euj"/><path class="hgpzimtyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:box-plot"} {...others} />);
}

export default Component;
