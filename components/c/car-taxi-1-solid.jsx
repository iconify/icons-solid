import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm9nwob-m.css';
import '../../css/h/hnglj9b8d.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="rm9nwob-m"/><path clip-rule="evenodd" class="hnglj9b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:car-taxi-1-solid"} {...others} />);
}

export default Component;
