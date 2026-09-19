import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/w/wuu1i6jkg.css';
import '../../css/j/j2cz82ajz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="wuu1i6jkg"/><path class="j2cz82ajz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:cloud-upload-thin"} {...others} />);
}

export default Component;
