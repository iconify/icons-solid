import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rn8ox-tri.css';
import '../../css/d/dqshq-b0e.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="rn8ox-tri"/><path class="dqshq-b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:easy-redmine"} {...others} />);
}

export default Component;
