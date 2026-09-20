import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n372nk4yh.css';
import '../../css/p/p42m-zbrr.css';
import '../../css/q/q0e_f6n9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n372nk4yh"/><path class="p42m-zbrr"/><path class="q0e_f6n9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:srm"} {...others} />);
}

export default Component;
