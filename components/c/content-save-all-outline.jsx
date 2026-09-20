import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4-404nwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a4-404nwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:content-save-all-outline"} {...others} />);
}

export default Component;
