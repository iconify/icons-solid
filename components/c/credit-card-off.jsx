import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqv4dg9_v.css';
import '../../css/g/gxt-rhbwz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqv4dg9_v"/><path class="gxt-rhbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:credit-card-off"} {...others} />);
}

export default Component;
