import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo1-5g48y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zo1-5g48y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:glasses-bold"} {...others} />);
}

export default Component;
