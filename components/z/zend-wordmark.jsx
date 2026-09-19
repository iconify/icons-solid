import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7gk3cces.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="u7gk3cces"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:zend-wordmark"} {...others} />);
}

export default Component;
