import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/toh_b0f4y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="toh_b0f4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:banknote-fill"} {...others} />);
}

export default Component;
