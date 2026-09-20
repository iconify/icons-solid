import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kazka8b2e.css';
import '../../css/b/b0insabyx.css';

const viewBox = {"width":24,"height":24};
const content = `<ellipse class="kazka8b2e"/><path clip-rule="evenodd" class="b0insabyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:del-alt-duotone"} {...others} />);
}

export default Component;
