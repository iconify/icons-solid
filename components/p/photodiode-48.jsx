import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y5_6-abcl.css';
import '../../css/o/of1wzvb1f.css';
import '../../css/o/oef6x1_vi.css';
import '../../css/e/ekxhm6afd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y5_6-abcl"/><path class="of1wzvb1f"/><path class="oef6x1_vi"/><path class="ekxhm6afd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:photodiode-48"} {...others} />);
}

export default Component;
