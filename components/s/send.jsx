import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4s69vbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r4s69vbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:send"} {...others} />);
}

export default Component;
