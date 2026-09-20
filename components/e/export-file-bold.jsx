import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2j4griqo.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m2j4griqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:export-file-bold"} {...others} />);
}

export default Component;
