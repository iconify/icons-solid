import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh5c8rm5y.css';

const viewBox = {"width":1792,"height":1792};
const content = `<path class="jh5c8rm5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:industry"} {...others} />);
}

export default Component;
