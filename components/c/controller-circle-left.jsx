import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l85xkubnb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l85xkubnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:controller-circle-left"} {...others} />);
}

export default Component;
