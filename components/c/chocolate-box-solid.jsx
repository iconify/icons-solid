import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6hmb2j6i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x6hmb2j6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chocolate-box-solid"} {...others} />);
}

export default Component;
