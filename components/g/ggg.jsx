import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwdbhvfaz.css';
import '../../css/x/xj-vmnbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwdbhvfaz"/><path class="xj-vmnbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ggg"} {...others} />);
}

export default Component;
