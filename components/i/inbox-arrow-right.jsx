import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n87-j9aso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n87-j9aso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:inbox-arrow-right"} {...others} />);
}

export default Component;
