import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-fqx2gsi.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="s-fqx2gsi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:thermometer"} {...others} />);
}

export default Component;
