import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hoz51dbyx.css';
import '../../css/r/r_b7lhsan.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hoz51dbyx"/><path class="r_b7lhsan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:price-tag-alt"} {...others} />);
}

export default Component;
