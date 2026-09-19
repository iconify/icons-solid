import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgh3h12lr.css';
import '../../css/f/fmv_7cgeu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgh3h12lr"/><path class="fmv_7cgeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-left-top-arrow-circle"} {...others} />);
}

export default Component;
