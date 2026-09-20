import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ppj4wo0ul.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ppj4wo0ul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:signal-5g"} {...others} />);
}

export default Component;
