import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/woe178buz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="woe178buz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:map-2"} {...others} />);
}

export default Component;
