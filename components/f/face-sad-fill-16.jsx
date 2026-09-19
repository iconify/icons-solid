import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5f6kvq_c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="n5f6kvq_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:face-sad-fill-16"} {...others} />);
}

export default Component;
