import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngv76bsku.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ngv76bsku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:z-wave-js-ui-light"} {...others} />);
}

export default Component;
