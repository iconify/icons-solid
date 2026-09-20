import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ibdbo8z7t.css';
import '../../css/w/w9i8zcc7s.css';
import '../../css/d/dt9g5gbfr.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="ibdbo8z7t"/><path class="w9i8zcc7s"/><path class="dt9g5gbfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:imaging-alternative-mri-two"} {...others} />);
}

export default Component;
