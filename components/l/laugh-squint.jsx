import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t12a6fb-c.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="t12a6fb-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:laugh-squint"} {...others} />);
}

export default Component;
