import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhjefccxr.css';
import '../../css/o/oi3y28bkg.css';
import '../../css/n/nvp42qb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hhjefccxr wm-k"/><path class="oi3y28bkg wm-a"/><path class="nvp42qb6d wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:sort"} {...others} />);
}

export default Component;
