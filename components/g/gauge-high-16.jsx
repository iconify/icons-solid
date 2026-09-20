import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/td8i4ib_z.css';
import '../../css/b/bxw0pccgm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="td8i4ib_z"/><path class="bxw0pccgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:gauge-high-16"} {...others} />);
}

export default Component;
