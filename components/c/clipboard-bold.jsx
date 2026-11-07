import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h8epyabtk.css';
import '../../css/v/v696jcbid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h8epyabtk"/><path clip-rule="evenodd" class="v696jcbid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-bold"} {...others} />);
}

export default Component;
