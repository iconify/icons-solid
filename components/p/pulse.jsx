import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1l_6cc3h.css';
import '../../css/o/oxijutbgj.css';

const viewBox = {"width":28,"height":24};
const content = `<path class="e1l_6cc3h"/><path class="oxijutbgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:pulse"} {...others} />);
}

export default Component;
