import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz1dp7iva.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lz1dp7iva"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-sharp-fill"} {...others} />);
}

export default Component;
