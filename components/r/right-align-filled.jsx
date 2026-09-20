import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k60z8sb7d.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="k60z8sb7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:right-align-filled"} {...others} />);
}

export default Component;
