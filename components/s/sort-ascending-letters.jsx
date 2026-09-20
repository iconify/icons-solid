import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp1on0brx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp1on0brx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:sort-ascending-letters"} {...others} />);
}

export default Component;
