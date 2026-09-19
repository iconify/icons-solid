import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miqof0biz.css';
import '../../css/p/p-rfurwvz.css';

const viewBox = {"width":16,"height":12};
const content = `<path class="miqof0biz"/><path class="p-rfurwvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:rewind"} {...others} />);
}

export default Component;
