import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/czo9m703j.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="czo9m703j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hourglass-half"} {...others} />);
}

export default Component;
