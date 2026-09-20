import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u424brbrp.css';
import '../../css/b/bdi3fdcsp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u424brbrp"/><path class="bdi3fdcsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:workflow-teamwork-user-high-five-bold"} {...others} />);
}

export default Component;
