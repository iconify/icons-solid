import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5mn0ab7i.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="e5mn0ab7i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:wpexplorer"} {...others} />);
}

export default Component;
