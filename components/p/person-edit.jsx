import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/e/elcdkcpal.css';
import '../../css/k/k2eulob4k.css';
import '../../css/c/ci_w7dbvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="elcdkcpal"/><path class="k2eulob4k"/><path class="ci_w7dbvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:person-edit"} {...others} />);
}

export default Component;
