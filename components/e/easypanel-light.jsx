import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq__7v1lc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fq__7v1lc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:easypanel-light"} {...others} />);
}

export default Component;
