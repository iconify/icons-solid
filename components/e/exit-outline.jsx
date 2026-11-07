import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njk-keb-f.css';
import '../../css/e/e3g82dqvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njk-keb-f"/><path clip-rule="evenodd" class="e3g82dqvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:exit-outline"} {...others} />);
}

export default Component;
