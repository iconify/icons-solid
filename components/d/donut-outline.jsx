import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8gd2ib8y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j8gd2ib8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-outline"} {...others} />);
}

export default Component;
