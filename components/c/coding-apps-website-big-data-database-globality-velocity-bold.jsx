import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghd2p1bfq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghd2p1bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-big-data-database-globality-velocity-bold"} {...others} />);
}

export default Component;
