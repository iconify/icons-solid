import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i9volac2n.css';
import '../../css/p/p3vg1obcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="i9volac2n"/><path class="p3vg1obcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:globe-2"} {...others} />);
}

export default Component;
