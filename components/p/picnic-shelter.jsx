import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlq4g9a-n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jlq4g9a-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:picnic-shelter"} {...others} />);
}

export default Component;
