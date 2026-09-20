import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc0uu2uxc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xc0uu2uxc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:single-neutral-actions-check-1-bold"} {...others} />);
}

export default Component;
