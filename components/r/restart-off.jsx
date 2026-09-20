import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4n4ezpvq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4n4ezpvq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:restart-off"} {...others} />);
}

export default Component;
