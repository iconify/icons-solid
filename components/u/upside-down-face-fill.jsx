import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj98js00o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gj98js00o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:upside-down-face-fill"} {...others} />);
}

export default Component;
