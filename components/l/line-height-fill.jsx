import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ytdk_ib9q.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="ytdk_ib9q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:line-height-fill"} {...others} />);
}

export default Component;
