import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpp5awb1r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kpp5awb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:male-solid"} {...others} />);
}

export default Component;
