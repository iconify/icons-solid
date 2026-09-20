import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2mwzrbfn.css';
import '../../css/q/qu61xsbqh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a2mwzrbfn"/><path class="qu61xsbqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ipor"} {...others} />);
}

export default Component;
