import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhq7le4od.css';
import '../../css/h/ht24iib2t.css';
import '../../css/i/ir1p6zwoe.css';
import '../../css/o/od8p-_f_j.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zhq7le4od"/><path class="ht24iib2t"/><path class="ir1p6zwoe"/><path class="od8p-_f_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:user-single-aim"} {...others} />);
}

export default Component;
