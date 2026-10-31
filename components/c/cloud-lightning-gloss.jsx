import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2jo36b_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n2jo36b_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:cloud-lightning-gloss"} {...others} />);
}

export default Component;
