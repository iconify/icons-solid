import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0kzqwtoc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q0kzqwtoc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:flag-alt"} {...others} />);
}

export default Component;
