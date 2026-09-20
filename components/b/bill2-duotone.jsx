import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibhpxzb1a.css';
import '../../css/l/li59jccuh.css';
import '../../css/o/ozff5bcpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ibhpxzb1a"/><path class="li59jccuh"/><path clip-rule="evenodd" class="ozff5bcpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bill2-duotone"} {...others} />);
}

export default Component;
