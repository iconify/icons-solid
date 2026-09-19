import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz5jy1b0j.css';
import '../../css/p/pcxysz9ao.css';
import '../../css/v/vwld5md-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gz5jy1b0j"/><path class="pcxysz9ao"/><path clip-rule="evenodd" class="vwld5md-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:weight-outline"} {...others} />);
}

export default Component;
