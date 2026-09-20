import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ur2nqhb_s.css';
import '../../css/x/xmk3jccpe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ur2nqhb_s"/><path class="xmk3jccpe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grimoire-ttrpg-dark"} {...others} />);
}

export default Component;
