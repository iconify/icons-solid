import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xauj5db7u.css';
import '../../css/y/y5rx7925u.css';
import '../../css/w/wd4bqobhz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xauj5db7u"/><path class="y5rx7925u"/><path class="wd4bqobhz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-heart"} {...others} />);
}

export default Component;
