import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dstdqz7pa.css';
import '../../css/p/prmb0_bed.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dstdqz7pa duoicon-secondary-layer"/><path class="duoicon-primary-layer prmb0_bed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:alert-octagon"} {...others} />);
}

export default Component;
