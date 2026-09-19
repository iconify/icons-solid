import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y48v3sbqz.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="y48v3sbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:clipboard-check"} {...others} />);
}

export default Component;
