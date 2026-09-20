import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-70ol5nq.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="l-70ol5nq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:entertainment-control-button-power-1-power-button-on-off"} {...others} />);
}

export default Component;
