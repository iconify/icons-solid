import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h13xzbczr.css';
import '../../css/t/tq3ib_bgw.css';
import '../../css/o/owlbiac5x.css';
import '../../css/s/s3v8ehk7l.css';
import '../../css/s/siyqi4bxv.css';
import '../../css/y/yl5kh2l4x.css';
import '../../css/y/yeo1ajmjm.css';
import '../../css/s/s0qq68b6e.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h13xzbczr"/><path class="tq3ib_bgw"/><path class="owlbiac5x"/><path class="s3v8ehk7l"/><path class="siyqi4bxv"/><path class="yl5kh2l4x"/><path class="yeo1ajmjm"/><path class="s0qq68b6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:upsnap"} {...others} />);
}

export default Component;
