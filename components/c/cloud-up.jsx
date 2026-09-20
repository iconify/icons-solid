import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/js7g39buq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="js7g39buq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cloud-up"} {...others} />);
}

export default Component;
