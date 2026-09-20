import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lzow25bmr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lzow25bmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:storm-advisory-outline"} {...others} />);
}

export default Component;
