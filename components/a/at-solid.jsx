import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ckyq5qvae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ckyq5qvae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:at-solid"} {...others} />);
}

export default Component;
