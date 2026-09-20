import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvtboac2u.css';
import '../../css/m/m23pcacuc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bvtboac2u"/><path class="m23pcacuc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:datasette-dark"} {...others} />);
}

export default Component;
