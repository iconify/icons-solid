import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dr1sztbjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dr1sztbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:emergency-siren-filled"} {...others} />);
}

export default Component;
