import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhh5x7blm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rhh5x7blm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:phone-forward"} {...others} />);
}

export default Component;
