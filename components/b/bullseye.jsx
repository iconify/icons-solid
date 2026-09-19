import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5a4u33sa.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="n5a4u33sa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:bullseye"} {...others} />);
}

export default Component;
