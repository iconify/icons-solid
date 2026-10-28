import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjo9zj5kz.css';

const viewBox = {"width":512,"height":512};
const content = `<path vector-effect="non-scaling-stroke" class="vjo9zj5kz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synaplan-dark"} {...others} />);
}

export default Component;
