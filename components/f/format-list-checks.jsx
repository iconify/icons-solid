import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qjuk9z-zb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qjuk9z-zb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:format-list-checks"} {...others} />);
}

export default Component;
