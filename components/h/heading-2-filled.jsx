import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6hcv8b7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e6hcv8b7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:heading-2-filled"} {...others} />);
}

export default Component;
