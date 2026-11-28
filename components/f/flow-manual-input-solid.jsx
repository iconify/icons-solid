import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y_4v9bbaz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y_4v9bbaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flow-manual-input-solid"} {...others} />);
}

export default Component;
