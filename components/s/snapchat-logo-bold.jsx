import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvu0c9bic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvu0c9bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:snapchat-logo-bold"} {...others} />);
}

export default Component;
