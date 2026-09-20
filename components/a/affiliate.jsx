import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/daws0z85g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="daws0z85g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:affiliate"} {...others} />);
}

export default Component;
