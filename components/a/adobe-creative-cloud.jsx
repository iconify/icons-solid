import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7mffvbgx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o7mffvbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:adobe-creative-cloud"} {...others} />);
}

export default Component;
