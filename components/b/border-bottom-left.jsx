import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd0zhtbgx.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="hd0zhtbgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:border-bottom-left"} {...others} />);
}

export default Component;
