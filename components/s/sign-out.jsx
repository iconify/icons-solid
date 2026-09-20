import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwj0gbbsy.css';
import '../../css/e/euo04dbov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwj0gbbsy"/><path class="euo04dbov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sign-out"} {...others} />);
}

export default Component;
