import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gq-f-vnec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gq-f-vnec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-chart"} {...others} />);
}

export default Component;
