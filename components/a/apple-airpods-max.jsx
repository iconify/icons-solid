import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ourt9_bgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ourt9_bgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:apple-airpods-max"} {...others} />);
}

export default Component;
