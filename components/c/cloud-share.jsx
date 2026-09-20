import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1ix1vbol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1ix1vbol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cloud-share"} {...others} />);
}

export default Component;
