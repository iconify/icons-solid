import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ilr5oxk1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ilr5oxk1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:decimal-comma-decrease"} {...others} />);
}

export default Component;
