import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aosvgyiyn.css';

const viewBox = {"width":1536,"height":1664};
const content = `<path class="aosvgyiyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:thumbs-o-up"} {...others} />);
}

export default Component;
