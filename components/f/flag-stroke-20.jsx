import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezcsx0bdm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ezcsx0bdm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:flag-stroke-20"} {...others} />);
}

export default Component;
