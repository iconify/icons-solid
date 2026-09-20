import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aa7q40b1r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="aa7q40b1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-7-sharp-fill"} {...others} />);
}

export default Component;
