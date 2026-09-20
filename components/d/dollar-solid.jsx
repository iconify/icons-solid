import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xf2qmgbse.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="xf2qmgbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:dollar-solid"} {...others} />);
}

export default Component;
