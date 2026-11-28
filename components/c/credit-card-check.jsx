import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbf3xmb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wbf3xmb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:credit-card-check"} {...others} />);
}

export default Component;
