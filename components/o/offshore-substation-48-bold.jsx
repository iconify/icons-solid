import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awsea6blm.css';
import '../../css/e/e7rwfg02i.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="awsea6blm"/><path class="e7rwfg02i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:offshore-substation-48-bold"} {...others} />);
}

export default Component;
