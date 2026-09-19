import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tn3lrh4wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tn3lrh4wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:lock-open-solid"} {...others} />);
}

export default Component;
