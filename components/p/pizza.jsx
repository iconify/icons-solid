import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/p/ptfsnvbxb.css';
import '../../css/l/lfrhepbcu.css';
import '../../css/k/kmff4wbxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="ptfsnvbxb"/><path class="lfrhepbcu"/><path class="kmff4wbxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:pizza"} {...others} />);
}

export default Component;
