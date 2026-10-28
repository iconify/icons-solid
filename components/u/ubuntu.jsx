import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8wq5kgjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8wq5kgjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ubuntu"} {...others} />);
}

export default Component;
