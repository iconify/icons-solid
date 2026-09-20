import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-tmtc6ls.css';
import '../../css/a/aygw_60rm.css';
import '../../css/q/qntnbrb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j-tmtc6ls"/><path class="aygw_60rm"/><path clip-rule="evenodd" class="qntnbrb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimalistic-magnifer-bug-bold-duotone"} {...others} />);
}

export default Component;
