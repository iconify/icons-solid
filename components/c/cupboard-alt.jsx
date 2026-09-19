import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftemw-a2c.css';
import '../../css/z/zfls42b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftemw-a2c"/><path class="zfls42b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cupboard-alt"} {...others} />);
}

export default Component;
