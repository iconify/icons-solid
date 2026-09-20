import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n4806ne8v.css';
import '../../css/j/jbx312dhc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n4806ne8v"/><path class="jbx312dhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:coin-solid"} {...others} />);
}

export default Component;
