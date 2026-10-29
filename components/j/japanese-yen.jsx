import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-lh599rs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-lh599rs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:japanese-yen"} {...others} />);
}

export default Component;
