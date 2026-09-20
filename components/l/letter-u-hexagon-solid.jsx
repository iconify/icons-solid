import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x14s3jbek.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x14s3jbek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:letter-u-hexagon-solid"} {...others} />);
}

export default Component;
