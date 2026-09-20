import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqpaqxb6c.css';
import '../../css/u/ud-8v13el.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oqpaqxb6c"/><path class="ud-8v13el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:k7-dark"} {...others} />);
}

export default Component;
