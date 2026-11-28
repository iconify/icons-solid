import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pn4cq5nxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pn4cq5nxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:washing-machine-alert"} {...others} />);
}

export default Component;
