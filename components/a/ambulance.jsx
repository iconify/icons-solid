import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zavhcvy1d.css';
import '../../css/l/lwsmj8vpm.css';

const viewBox = {"width":35,"height":24};
const content = `<path class="zavhcvy1d"/><path class="lwsmj8vpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:ambulance"} {...others} />);
}

export default Component;
