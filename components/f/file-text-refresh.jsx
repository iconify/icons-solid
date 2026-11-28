import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svm9p0buj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svm9p0buj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:file-text-refresh"} {...others} />);
}

export default Component;
