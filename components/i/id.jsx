import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw3ztwb7z.css';
import '../../css/w/wnni9vb7t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bw3ztwb7z"/><path class="wnni9vb7t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:id"} {...others} />);
}

export default Component;
