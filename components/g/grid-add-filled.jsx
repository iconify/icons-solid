import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdwcty1xd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdwcty1xd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:grid-add-filled"} {...others} />);
}

export default Component;
