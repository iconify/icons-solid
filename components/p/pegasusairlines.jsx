import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e_h1m2mak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e_h1m2mak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:pegasusairlines"} {...others} />);
}

export default Component;
