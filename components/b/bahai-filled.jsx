import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm3ghdgpm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gm3ghdgpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bahai-filled"} {...others} />);
}

export default Component;
