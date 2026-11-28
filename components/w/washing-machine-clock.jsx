import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdv2lsgrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qdv2lsgrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:washing-machine-clock"} {...others} />);
}

export default Component;
