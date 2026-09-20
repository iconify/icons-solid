import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pac7fn7hq.css';
import '../../css/g/gl2fr07us.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pac7fn7hq"/><path class="gl2fr07us"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:houses-2-filled"} {...others} />);
}

export default Component;
