import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eaogckb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eaogckb6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:traffic-cone"} {...others} />);
}

export default Component;
