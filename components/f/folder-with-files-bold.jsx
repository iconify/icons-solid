import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vz2ub5bko.css';
import '../../css/h/hazygbbpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vz2ub5bko"/><path class="hazygbbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-with-files-bold"} {...others} />);
}

export default Component;
