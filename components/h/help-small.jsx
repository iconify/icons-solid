import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyrvqk-2g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyrvqk-2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:help-small"} {...others} />);
}

export default Component;
