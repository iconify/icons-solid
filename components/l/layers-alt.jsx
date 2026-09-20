import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajrde3qwb.css';
import '../../css/i/idfa2cc6d.css';
import '../../css/n/n-beafqqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ajrde3qwb"/><path class="idfa2cc6d"/><path class="n-beafqqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:layers-alt"} {...others} />);
}

export default Component;
