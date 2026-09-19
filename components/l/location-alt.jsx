import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imsy5jbgi.css';
import '../../css/h/hgn2g5biv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="imsy5jbgi"/><path class="hgn2g5biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:location-alt"} {...others} />);
}

export default Component;
