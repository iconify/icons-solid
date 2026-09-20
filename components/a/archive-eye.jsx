import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lejv3lbva.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lejv3lbva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:archive-eye"} {...others} />);
}

export default Component;
