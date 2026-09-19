import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn48d1adx.css';

const viewBox = {"width":1632,"height":1792};
const content = `<path class="jn48d1adx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sort-alpha-desc"} {...others} />);
}

export default Component;
