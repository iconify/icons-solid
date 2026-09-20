import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fk5-qvpov.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fk5-qvpov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:home-angle-2-bold"} {...others} />);
}

export default Component;
