import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wguh654wa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wguh654wa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:closet-filled"} {...others} />);
}

export default Component;
