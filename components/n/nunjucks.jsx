import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tu5o7c14i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tu5o7c14i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:nunjucks"} {...others} />);
}

export default Component;
