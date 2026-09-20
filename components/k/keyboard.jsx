import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hk-6u-b3t.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="hk-6u-b3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:keyboard"} {...others} />);
}

export default Component;
