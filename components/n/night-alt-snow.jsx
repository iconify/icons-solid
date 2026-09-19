import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9sbsvbiu.css';

const viewBox = {"width":26,"height":24};
const content = `<path class="s9sbsvbiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:night-alt-snow"} {...others} />);
}

export default Component;
