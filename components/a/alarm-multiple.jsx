import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/metz4187g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="metz4187g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:alarm-multiple"} {...others} />);
}

export default Component;
