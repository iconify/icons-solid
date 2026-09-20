import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5y0mrhjz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5y0mrhjz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:gift-solid"} {...others} />);
}

export default Component;
