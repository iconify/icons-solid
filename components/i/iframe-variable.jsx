import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz90e-imq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oz90e-imq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:iframe-variable"} {...others} />);
}

export default Component;
