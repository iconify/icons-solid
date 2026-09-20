import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmxgaqb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hmxgaqb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-record-fill"} {...others} />);
}

export default Component;
