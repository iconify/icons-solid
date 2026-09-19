import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2m-7l4fa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o2m-7l4fa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:music-album-fill"} {...others} />);
}

export default Component;
