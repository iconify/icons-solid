import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oppq-ug0u.css';
import '../../css/z/zl_yt6bwq.css';
import '../../css/x/x1ll44bzj.css';
import '../../css/p/ppb77-gkq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oppq-ug0u"/><path class="zl_yt6bwq"/><path class="x1ll44bzj"/><path class="ppb77-gkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:permafrost-48-bold"} {...others} />);
}

export default Component;
