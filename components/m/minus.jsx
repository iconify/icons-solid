import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/keum6jv7t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="keum6jv7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:minus"} {...others} />);
}

export default Component;
