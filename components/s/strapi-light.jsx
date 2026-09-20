import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtf41p-9o.css';
import '../../css/b/bynye9btr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qtf41p-9o"/><path class="bynye9btr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:strapi-light"} {...others} />);
}

export default Component;
