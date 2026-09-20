import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hm0s3htrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hm0s3htrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:tube"} {...others} />);
}

export default Component;
