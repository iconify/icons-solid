import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp2-5gq9s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jp2-5gq9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:folder"} {...others} />);
}

export default Component;
