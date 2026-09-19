import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppwiyuuhj.css';
import '../../css/g/gdr7v9b9m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ppwiyuuhj"/><path class="gdr7v9b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thumbs-up-outline"} {...others} />);
}

export default Component;
