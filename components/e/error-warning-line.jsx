import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/baaqp0b9y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="baaqp0b9y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:error-warning-line"} {...others} />);
}

export default Component;
