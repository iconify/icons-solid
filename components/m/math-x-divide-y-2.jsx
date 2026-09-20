import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7ahtgoqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7ahtgoqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:math-x-divide-y-2"} {...others} />);
}

export default Component;
