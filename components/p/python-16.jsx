import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no9uvky3b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="no9uvky3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:python-16"} {...others} />);
}

export default Component;
