import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rpjc7qc9c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rpjc7qc9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mixing-bowl"} {...others} />);
}

export default Component;
