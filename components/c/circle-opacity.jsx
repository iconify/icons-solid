import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbp5xr6qo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gbp5xr6qo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:circle-opacity"} {...others} />);
}

export default Component;
