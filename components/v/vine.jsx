import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cyv38rbdv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cyv38rbdv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:vine"} {...others} />);
}

export default Component;
