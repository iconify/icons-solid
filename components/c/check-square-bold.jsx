import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e11cv8b-r.css';
import '../../css/r/rgvk_601g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e11cv8b-r"/><path class="rgvk_601g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:check-square-bold"} {...others} />);
}

export default Component;
