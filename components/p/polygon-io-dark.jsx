import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dih82-bfe.css';

const viewBox = {"width":290,"height":79};
const content = `<path clip-rule="evenodd" class="dih82-bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:polygon-io-dark"} {...others} />);
}

export default Component;
