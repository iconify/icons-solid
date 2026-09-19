import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/roar_qb4z.css';
import '../../css/s/sba0k3-2g.css';
import '../../css/i/iiid1177w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="roar_qb4z"/><path class="sba0k3-2g"/><circle class="iiid1177w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-moonrepo"} {...others} />);
}

export default Component;
