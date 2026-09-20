import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q__a3ub2g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q__a3ub2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:openleaf-dark"} {...others} />);
}

export default Component;
