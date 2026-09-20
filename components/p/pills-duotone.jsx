import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i18ffpbgu.css';
import '../../css/s/s2cfy4b5f.css';
import '../../css/b/bshhd7gtm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i18ffpbgu"/><path class="s2cfy4b5f"/><path class="bshhd7gtm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:pills-duotone"} {...others} />);
}

export default Component;
