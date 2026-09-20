import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h2z5eczhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h2z5eczhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:eye-minus"} {...others} />);
}

export default Component;
