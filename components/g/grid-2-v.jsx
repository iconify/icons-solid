import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/euhz4we2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="euhz4we2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:grid-2-v"} {...others} />);
}

export default Component;
