import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj6it4upb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xj6it4upb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:panel-expansion"} {...others} />);
}

export default Component;
