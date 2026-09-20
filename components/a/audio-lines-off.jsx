import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjslyj_rv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjslyj_rv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:audio-lines-off"} {...others} />);
}

export default Component;
