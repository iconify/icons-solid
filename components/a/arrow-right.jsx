import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evf7b38_a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evf7b38_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:arrow-right"} {...others} />);
}

export default Component;
