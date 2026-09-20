import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-n5hnboj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-n5hnboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shop-edit-outline"} {...others} />);
}

export default Component;
