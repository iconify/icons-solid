import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1p4y9t4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1p4y9t4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:file-shield-alt"} {...others} />);
}

export default Component;
