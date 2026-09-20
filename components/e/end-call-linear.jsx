import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9m55n4ik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y9m55n4ik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-linear"} {...others} />);
}

export default Component;
