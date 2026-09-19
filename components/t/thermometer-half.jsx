import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-_ea2b1p.css';

const viewBox = {"width":1024,"height":1792};
const content = `<path class="c-_ea2b1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:thermometer-half"} {...others} />);
}

export default Component;
