import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ok4yy0jjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ok4yy0jjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:alarm"} {...others} />);
}

export default Component;
