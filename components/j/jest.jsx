import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idsx4vb9j.css';
import '../../css/l/li7u4ccwd.css';

const viewBox = {"width":256,"height":283};
const content = `<path class="idsx4vb9j"/><path class="li7u4ccwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:jest"} {...others} />);
}

export default Component;
