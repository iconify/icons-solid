import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy4b1wx4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy4b1wx4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cake-variant"} {...others} />);
}

export default Component;
