import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5xt8ebyb.css';
import '../../css/y/yls_sbcyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5xt8ebyb"/><path class="yls_sbcyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:req"} {...others} />);
}

export default Component;
