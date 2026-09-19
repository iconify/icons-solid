import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk71f6p-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jk71f6p-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:notification-outline-plus"} {...others} />);
}

export default Component;
