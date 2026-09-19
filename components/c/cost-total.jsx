import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-6d7pbcl.css';
import '../../css/x/x4pv4iirw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b-6d7pbcl"/><path class="x4pv4iirw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cost-total"} {...others} />);
}

export default Component;
