import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuycr8uha.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="vuycr8uha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:suitcase"} {...others} />);
}

export default Component;
