import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1seucd2b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n1seucd2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:data-cloud-upload"} {...others} />);
}

export default Component;
