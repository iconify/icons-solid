import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_5yh4fju.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="z_5yh4fju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:circle"} {...others} />);
}

export default Component;
