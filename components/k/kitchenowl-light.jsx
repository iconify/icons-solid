import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sf5_hobel.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sf5_hobel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kitchenowl-light"} {...others} />);
}

export default Component;
