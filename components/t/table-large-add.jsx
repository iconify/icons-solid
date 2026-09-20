import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/majb9u9sn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="majb9u9sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:table-large-add"} {...others} />);
}

export default Component;
