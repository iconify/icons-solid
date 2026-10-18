import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypuxbw7af.css';
import '../../css/a/awuv256_t.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ypuxbw7af"/><path class="awuv256_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:green-jobs-48"} {...others} />);
}

export default Component;
