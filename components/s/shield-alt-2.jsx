import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2zodh4mf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2zodh4mf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shield-alt-2"} {...others} />);
}

export default Component;
