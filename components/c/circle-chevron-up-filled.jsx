import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxawrmb7c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xxawrmb7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-chevron-up-filled"} {...others} />);
}

export default Component;
