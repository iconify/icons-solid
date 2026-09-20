import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anp_7vq1m.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="anp_7vq1m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:th-list-solid"} {...others} />);
}

export default Component;
