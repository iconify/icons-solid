import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlhgx7bdi.css';
import '../../css/n/nx3hbtbfb.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="zlhgx7bdi"/><path class="nx3hbtbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ei:refresh"} {...others} />);
}

export default Component;
