import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/og0ot6bql.css';
import '../../css/d/dzp31wl7l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="og0ot6bql"/><path class="dzp31wl7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:movies-reel-bold"} {...others} />);
}

export default Component;
