import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2qpr6-4i.css';

const viewBox = {"width":2112,"height":1920};
const content = `<path class="l2qpr6-4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:party"} {...others} />);
}

export default Component;
