import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2z2_hsvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2z2_hsvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:file-search-alt"} {...others} />);
}

export default Component;
