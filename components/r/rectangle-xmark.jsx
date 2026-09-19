import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a3yhi6rbc.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="a3yhi6rbc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:rectangle-xmark"} {...others} />);
}

export default Component;
