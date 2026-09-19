import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y4_6nhbxh.css';

const viewBox = {"width":1792,"height":1728};
const content = `<path class="y4_6nhbxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:recycle"} {...others} />);
}

export default Component;
