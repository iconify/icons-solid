import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdjcw3-gp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hdjcw3-gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:mirror"} {...others} />);
}

export default Component;
