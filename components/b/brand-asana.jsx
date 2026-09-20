import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/khf3n-v7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="khf3n-v7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-asana"} {...others} />);
}

export default Component;
