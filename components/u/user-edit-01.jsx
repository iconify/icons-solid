import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbpve-yut.css';
import '../../css/y/y1kc1jb1q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="bbpve-yut"/><path class="y1kc1jb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-edit-01"} {...others} />);
}

export default Component;
