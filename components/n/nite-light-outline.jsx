import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hucfk3b8p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hucfk3b8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:nite-light-outline"} {...others} />);
}

export default Component;
