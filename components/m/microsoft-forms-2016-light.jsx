import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awo_d-8ej.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="awo_d-8ej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-2016-light"} {...others} />);
}

export default Component;
