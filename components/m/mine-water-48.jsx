import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7ezmybgf.css';
import '../../css/e/elzyb5xmp.css';
import '../../css/o/ovlh7zbng.css';
import '../../css/n/nqumikboa.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="r7ezmybgf"/><path class="elzyb5xmp"/><path class="ovlh7zbng"/><path class="nqumikboa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:mine-water-48"} {...others} />);
}

export default Component;
