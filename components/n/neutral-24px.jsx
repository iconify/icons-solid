import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj4ohyv-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dj4ohyv-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:neutral-24px"} {...others} />);
}

export default Component;
