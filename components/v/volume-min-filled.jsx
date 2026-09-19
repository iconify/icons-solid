import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy3z4m3dn.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="oy3z4m3dn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:volume-min-filled"} {...others} />);
}

export default Component;
