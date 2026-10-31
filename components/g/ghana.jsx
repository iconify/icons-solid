import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgu_qf8mr.css';
import '../../css/d/dz--kkbng.css';
import '../../css/w/wj8_6-ths.css';
import '../../css/k/kgq3d9qlz.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="fgu_qf8mr"/><path class="dz--kkbng"/><path class="wj8_6-ths"/><path class="kgq3d9qlz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:ghana"} {...others} />);
}

export default Component;
