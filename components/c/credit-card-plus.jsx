import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w93ba07rq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w93ba07rq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:credit-card-plus"} {...others} />);
}

export default Component;
