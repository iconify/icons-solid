import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ady9k8bfr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ady9k8bfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo-social:linkedin"} {...others} />);
}

export default Component;
