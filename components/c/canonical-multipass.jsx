import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdm4w2bac.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdm4w2bac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:canonical-multipass"} {...others} />);
}

export default Component;
