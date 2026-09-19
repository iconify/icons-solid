import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zm1hi_b-d.css';
import '../../css/f/ffq0z92oy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zm1hi_b-d"/><path class="ffq0z92oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:picture-in-picture-filled"} {...others} />);
}

export default Component;
