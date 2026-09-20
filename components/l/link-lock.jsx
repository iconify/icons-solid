import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0_-kgbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f0_-kgbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:link-lock"} {...others} />);
}

export default Component;
