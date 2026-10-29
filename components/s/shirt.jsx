import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxoxozypq.css';
import '../../css/w/whdb1h-fa.css';
import '../../css/t/tcq7eybbj.css';
import '../../css/z/zzeg5qbgp.css';
import '../../css/z/zd5s40n_h.css';
import '../../css/p/pg9i02rft.css';
import '../../css/r/r28hqgbbu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qxoxozypq wm-shadow"/><path class="whdb1h-fa"/><path class="tcq7eybbj"/><path class="zzeg5qbgp"/><path class="zd5s40n_h"/><path class="pg9i02rft wm-shine"/><path class="r28hqgbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:shirt"} {...others} />);
}

export default Component;
