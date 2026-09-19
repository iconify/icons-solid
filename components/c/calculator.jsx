import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq0w_mbfl.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="kq0w_mbfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:calculator"} {...others} />);
}

export default Component;
