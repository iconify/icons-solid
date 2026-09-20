import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cis5txmal.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cis5txmal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:transfer-h-filled"} {...others} />);
}

export default Component;
