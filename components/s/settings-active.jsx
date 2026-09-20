import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fom46j_ot.css';
import '../../css/g/go0tywt9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fom46j_ot"/><path clip-rule="evenodd" class="go0tywt9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:settings-active"} {...others} />);
}

export default Component;
