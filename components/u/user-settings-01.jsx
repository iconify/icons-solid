import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/aeqle0b7q.css';
import '../../css/b/bbpve-yut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="aeqle0b7q"/><circle class="bbpve-yut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-settings-01"} {...others} />);
}

export default Component;
