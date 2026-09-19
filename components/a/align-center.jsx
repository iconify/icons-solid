import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk7f85f6n.css';

const viewBox = {"width":1792,"height":1408};
const content = `<path class="jk7f85f6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:align-center"} {...others} />);
}

export default Component;
