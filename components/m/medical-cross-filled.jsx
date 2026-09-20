import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6-z7noub.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y6-z7noub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:medical-cross-filled"} {...others} />);
}

export default Component;
