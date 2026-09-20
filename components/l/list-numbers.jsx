import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/glxfj3qif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="glxfj3qif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:list-numbers"} {...others} />);
}

export default Component;
