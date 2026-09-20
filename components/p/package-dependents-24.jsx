import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1_z_4b0d.css';
import '../../css/t/t7kmc2bkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1_z_4b0d"/><path class="t7kmc2bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:package-dependents-24"} {...others} />);
}

export default Component;
