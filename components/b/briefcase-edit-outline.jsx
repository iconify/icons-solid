import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tr-qwf9jd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tr-qwf9jd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:briefcase-edit-outline"} {...others} />);
}

export default Component;
