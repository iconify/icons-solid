import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lhlre9baf.css';
import '../../css/d/dhzjg104r.css';
import '../../css/y/yz7331f4s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="lhlre9baf"/><circle class="dhzjg104r"/><path class="yz7331f4s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:mode-light-duotone"} {...others} />);
}

export default Component;
