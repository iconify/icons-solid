import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/picx5jbag.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="picx5jbag"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-bottom-left"} {...others} />);
}

export default Component;
