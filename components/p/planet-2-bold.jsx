import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rlkg52b1p.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rlkg52b1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:planet-2-bold"} {...others} />);
}

export default Component;
