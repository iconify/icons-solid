import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw7aaducw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw7aaducw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:invoice-line-items"} {...others} />);
}

export default Component;
