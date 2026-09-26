import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vw3t96bes.css';
import '../../css/d/d5k3kbbqd.css';
import '../../css/i/iftdw8boo.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vw3t96bes"/><path class="d5k3kbbqd"/><path class="iftdw8boo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-cog-outline"} {...others} />);
}

export default Component;
