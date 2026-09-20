import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4_tdob4v.css';
import '../../css/b/btuwcu4kf.css';
import '../../css/l/lo1_5i7tr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r4_tdob4v"/><path class="btuwcu4kf"/><path class="lo1_5i7tr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:briefcase3-duotone"} {...others} />);
}

export default Component;
