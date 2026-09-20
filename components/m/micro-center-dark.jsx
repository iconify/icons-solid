import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/megucjbvn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="megucjbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:micro-center-dark"} {...others} />);
}

export default Component;
