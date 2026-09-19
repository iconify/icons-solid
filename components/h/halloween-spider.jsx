import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id_uzvtgl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="id_uzvtgl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:halloween-spider"} {...others} />);
}

export default Component;
