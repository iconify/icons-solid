import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcxdw0blf.css';
import '../../css/w/wue79tp2v.css';
import '../../css/n/nda_xfbmv.css';
import '../../css/r/rlm6af3qk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcxdw0blf"/><path class="wue79tp2v"/><path class="nda_xfbmv"/><path class="rlm6af3qk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:equal"} {...others} />);
}

export default Component;
