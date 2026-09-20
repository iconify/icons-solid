import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh2yl7b2c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hh2yl7b2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:equinixmetal"} {...others} />);
}

export default Component;
