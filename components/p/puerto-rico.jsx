import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmibc4bxr.css';
import '../../css/h/h2hkf3bmt.css';
import '../../css/h/h2-v3739d.css';
import '../../css/z/z55hzee2y.css';
import '../../css/j/jjnn4obdu.css';
import '../../css/n/nu9ii6b6j.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="nmibc4bxr"/><path class="h2hkf3bmt"/><path class="h2-v3739d"/><path class="z55hzee2y"/><path class="jjnn4obdu"/><path class="nu9ii6b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:puerto-rico"} {...others} />);
}

export default Component;
