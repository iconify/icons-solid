import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fob53hk2v.css';
import '../../css/t/t2f6tacfc.css';
import '../../css/w/ww2udeb7u.css';
import '../../css/u/u7p-4csqq.css';
import '../../css/r/rspxhd8_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fob53hk2v"/><path clip-rule="evenodd" class="t2f6tacfc"/><path clip-rule="evenodd" class="ww2udeb7u"/><path clip-rule="evenodd" class="u7p-4csqq"/><path clip-rule="evenodd" class="rspxhd8_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:expand-outline"} {...others} />);
}

export default Component;
