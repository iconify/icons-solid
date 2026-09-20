import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-21fi9kw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m-21fi9kw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:folder"} {...others} />);
}

export default Component;
