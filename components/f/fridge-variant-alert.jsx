import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2sf82c6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s2sf82c6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:fridge-variant-alert"} {...others} />);
}

export default Component;
