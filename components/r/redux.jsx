import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6dqfo8re.css';

const viewBox = {"width":256,"height":256,"top":-6};
const content = `<path class="d6dqfo8re"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:redux"} {...others} />);
}

export default Component;
