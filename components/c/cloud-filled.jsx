import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r92_c_ckc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r92_c_ckc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cloud-filled"} {...others} />);
}

export default Component;
