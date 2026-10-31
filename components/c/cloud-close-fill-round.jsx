import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx29xs_nz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gx29xs_nz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cloud-close-fill-round"} {...others} />);
}

export default Component;
