import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awsea6blm.css';
import '../../css/o/o9nde9b-c.css';
import '../../css/x/xmrhsdbaq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="awsea6blm"/><path class="o9nde9b-c"/><path class="xmrhsdbaq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:piston-48-bold"} {...others} />);
}

export default Component;
