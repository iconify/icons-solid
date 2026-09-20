import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ay3ubnumw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ay3ubnumw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:seat-legroom-normal"} {...others} />);
}

export default Component;
