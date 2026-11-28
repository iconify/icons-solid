import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eib0c1m0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eib0c1m0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:map-pin-off"} {...others} />);
}

export default Component;
