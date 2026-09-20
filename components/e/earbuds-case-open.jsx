import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uy_v5jb1z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uy_v5jb1z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:earbuds-case-open"} {...others} />);
}

export default Component;
