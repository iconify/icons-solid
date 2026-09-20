import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8c63piap.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x8c63piap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-top-outline"} {...others} />);
}

export default Component;
