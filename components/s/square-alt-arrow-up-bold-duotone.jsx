import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/quqkdstdb.css';
import '../../css/a/a7qf29bcu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="quqkdstdb"/><path class="a7qf29bcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-alt-arrow-up-bold-duotone"} {...others} />);
}

export default Component;
