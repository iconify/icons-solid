import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5kqz9n5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n5kqz9n5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:crown-circle-outline"} {...others} />);
}

export default Component;
