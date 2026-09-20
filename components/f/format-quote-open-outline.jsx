import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrlj9demd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrlj9demd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-quote-open-outline"} {...others} />);
}

export default Component;
