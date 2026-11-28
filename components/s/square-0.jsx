import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uc6v5ibmc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uc6v5ibmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:square-0"} {...others} />);
}

export default Component;
