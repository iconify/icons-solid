import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qlyym_dwh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qlyym_dwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:tram-with-destination-display-and-pantograph-on-tram-track"} {...others} />);
}

export default Component;
