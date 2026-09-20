import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9zwy09dw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r9zwy09dw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:grid-3x2-fill"} {...others} />);
}

export default Component;
