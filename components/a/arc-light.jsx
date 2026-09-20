import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qo1-5mpqh.css';

const viewBox = {"width":62,"height":24};
const content = `<path clip-rule="evenodd" class="qo1-5mpqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:arc-light"} {...others} />);
}

export default Component;
