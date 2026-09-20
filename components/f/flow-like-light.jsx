import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clmjnb28i.css';
import '../../css/s/sayrawf8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="clmjnb28i"/><path class="sayrawf8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:flow-like-light"} {...others} />);
}

export default Component;
