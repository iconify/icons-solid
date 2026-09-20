import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/st1-uurhq.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="st1-uurhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-up-bold"} {...others} />);
}

export default Component;
