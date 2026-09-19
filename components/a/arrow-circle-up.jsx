import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak_owkqcw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ak_owkqcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:arrow-circle-up"} {...others} />);
}

export default Component;
