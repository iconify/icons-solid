import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjjd_7sue.css';

const viewBox = {"width":1536,"height":1280};
const content = `<path class="pjjd_7sue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:inbox"} {...others} />);
}

export default Component;
