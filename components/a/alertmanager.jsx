import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6hwt2o8x.css';

const viewBox = {"width":115.333,"height":114};
const content = `<path class="r6hwt2o8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:alertmanager"} {...others} />);
}

export default Component;
