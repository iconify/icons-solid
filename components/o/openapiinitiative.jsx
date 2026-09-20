import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg8vf0byu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tg8vf0byu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:openapiinitiative"} {...others} />);
}

export default Component;
