import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dg2qbgkzh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="dg2qbgkzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:y-combinator"} {...others} />);
}

export default Component;
