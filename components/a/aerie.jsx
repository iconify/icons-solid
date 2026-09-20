import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v18hzdb8f.css';
import '../../css/d/d0u33jbdc.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="v18hzdb8f"/><path class="d0u33jbdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:aerie"} {...others} />);
}

export default Component;
