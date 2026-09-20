import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3l9e9m6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3l9e9m6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:content-save-add"} {...others} />);
}

export default Component;
