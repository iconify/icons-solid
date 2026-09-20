import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7ld7wu0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s7ld7wu0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:arrow-autofit-up"} {...others} />);
}

export default Component;
