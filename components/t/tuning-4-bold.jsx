import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do-e7qb8u.css';
import '../../css/h/h_t6g3fbz.css';
import '../../css/c/cphejizkr.css';
import '../../css/z/zjnuseb2i.css';
import '../../css/r/rz347ibxe.css';
import '../../css/s/sdsvpc-zl.css';
import '../../css/v/vyc-05enf.css';
import '../../css/f/fo0gawrwq.css';
import '../../css/w/wzoe6evny.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do-e7qb8u"/><path class="h_t6g3fbz"/><path class="cphejizkr"/><path class="zjnuseb2i"/><path class="rz347ibxe"/><path class="sdsvpc-zl"/><path class="vyc-05enf"/><path class="fo0gawrwq"/><path class="wzoe6evny"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-4-bold"} {...others} />);
}

export default Component;
