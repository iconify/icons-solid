import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vva995_fr.css';

const viewBox = {"width":24,"height":24,"left":-0.5,"top":-1};
const content = `<path class="vva995_fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:highlighter"} {...others} />);
}

export default Component;
