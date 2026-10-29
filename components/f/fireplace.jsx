import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a2nd9ub4u.css';
import '../../css/i/i2fzhbc8u.css';
import '../../css/n/nonr4pbax.css';
import '../../css/u/ux535excy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="a2nd9ub4u wm-k"/><path class="i2fzhbc8u wm-a"/><path class="nonr4pbax wm-k"/><path class="ux535excy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:fireplace"} {...others} />);
}

export default Component;
