import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/teizhzbmj.css';
import '../../css/l/lx8hjcc6o.css';
import '../../css/n/nceqg5bzc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="teizhzbmj"/><path class="lx8hjcc6o"/><path class="nceqg5bzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:taking-pictures-cameras-bold"} {...others} />);
}

export default Component;
