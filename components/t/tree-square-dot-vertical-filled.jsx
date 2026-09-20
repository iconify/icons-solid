import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1fv2s1fr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1fv2s1fr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:tree-square-dot-vertical-filled"} {...others} />);
}

export default Component;
