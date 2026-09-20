import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ebrfcd7vi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ebrfcd7vi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:timer-cog-outline"} {...others} />);
}

export default Component;
