import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uf5_zmbiz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="uf5_zmbiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:cloud-off-filled"} {...others} />);
}

export default Component;
