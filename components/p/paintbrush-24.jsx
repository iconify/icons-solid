import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntt91gjof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntt91gjof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:paintbrush-24"} {...others} />);
}

export default Component;
