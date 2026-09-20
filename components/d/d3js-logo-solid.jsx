import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r36w5t33e.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r36w5t33e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:d3js-logo-solid"} {...others} />);
}

export default Component;
