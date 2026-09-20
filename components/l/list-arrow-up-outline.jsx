import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h0d5y6b-l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h0d5y6b-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-arrow-up-outline"} {...others} />);
}

export default Component;
