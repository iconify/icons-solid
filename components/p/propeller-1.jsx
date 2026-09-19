import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kht4czj5f.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="kht4czj5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:propeller-1"} {...others} />);
}

export default Component;
