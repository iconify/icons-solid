import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gqe1hxm4o.css';
import '../../css/s/s7rqtiajo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gqe1hxm4o"/><path class="s7rqtiajo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:windy-strong"} {...others} />);
}

export default Component;
