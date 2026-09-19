import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l31d8cc7e.css';
import '../../css/i/ijd6lr-_h.css';
import '../../css/i/iow7mib_a.css';
import '../../css/z/zqa37zcin.css';
import '../../css/f/fn8xm-7gk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="l31d8cc7e"/><path clip-rule="evenodd" class="ijd6lr-_h"/><path clip-rule="evenodd" class="iow7mib_a"/><path clip-rule="evenodd" class="zqa37zcin"/><path clip-rule="evenodd" class="fn8xm-7gk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:minimize-outline"} {...others} />);
}

export default Component;
