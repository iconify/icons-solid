import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ift012_ct.css';
import '../../css/o/ockmixada.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ift012_ct"/><path class="ockmixada"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:basket"} {...others} />);
}

export default Component;
