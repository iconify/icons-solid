import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kog5zicjb.css';
import '../../css/y/y02bymb-z.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="kog5zicjb"/><path class="y02bymb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:commento"} {...others} />);
}

export default Component;
