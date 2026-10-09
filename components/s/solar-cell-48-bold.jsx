import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-f-m2b4w.css';
import '../../css/a/a5---6bmt.css';
import '../../css/p/p8v8gwqin.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v-f-m2b4w"/><path class="a5---6bmt"/><path class="p8v8gwqin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-cell-48-bold"} {...others} />);
}

export default Component;
