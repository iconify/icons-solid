import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-00mr7rz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-00mr7rz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:format-list-numbered-rtl"} {...others} />);
}

export default Component;
