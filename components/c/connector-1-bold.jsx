import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6-3i_q-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a6-3i_q-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:connector-1-bold"} {...others} />);
}

export default Component;
