import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cci9ae_nq.css';
import '../../css/o/oexqymb-g.css';
import '../../css/l/lkh3vr24w.css';
import '../../css/z/zcnczmjty.css';
import '../../css/z/zh8221lvv.css';
import '../../css/g/gapgxrbjo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cci9ae_nq"/><path clip-rule="evenodd" class="oexqymb-g"/><path clip-rule="evenodd" class="lkh3vr24w"/><path class="zcnczmjty"/><path class="zh8221lvv"/><path class="gapgxrbjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:share-circle-outline"} {...others} />);
}

export default Component;
