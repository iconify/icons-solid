import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezbfhcbuu.css';
import '../../css/a/a45l8jhyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer ezbfhcbuu"/><path class="a45l8jhyb duoicon-secondary-layer"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:bell"} {...others} />);
}

export default Component;
