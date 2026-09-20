import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su1r-hbrc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="su1r-hbrc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-check-bold"} {...others} />);
}

export default Component;
