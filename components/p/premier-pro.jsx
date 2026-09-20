import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5maixbua.css';
import '../../css/b/bfq0sui_z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5maixbua"/><path class="bfq0sui_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:premier-pro"} {...others} />);
}

export default Component;
