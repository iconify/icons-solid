import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sh4rqfpek.css';
import '../../css/l/luoocdwcm.css';
import '../../css/m/mrtpigbey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sh4rqfpek"/><path class="luoocdwcm"/><path class="mrtpigbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:align-center"} {...others} />);
}

export default Component;
