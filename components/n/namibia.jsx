import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvtm2ug1g.css';
import '../../css/x/xlnya0b7c.css';
import '../../css/j/ju32zt5fj.css';
import '../../css/y/y08i5bbob.css';
import '../../css/h/hjl0cwb9v.css';
import '../../css/k/ky05v0b6j.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="bvtm2ug1g"/><path class="xlnya0b7c"/><path class="ju32zt5fj"/><path class="y08i5bbob"/><path class="hjl0cwb9v"/><path class="ky05v0b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:namibia"} {...others} />);
}

export default Component;
