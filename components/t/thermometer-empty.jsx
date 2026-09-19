import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt8qg7b3g.css';

const viewBox = {"width":1024,"height":1792};
const content = `<path class="jt8qg7b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:thermometer-empty"} {...others} />);
}

export default Component;
