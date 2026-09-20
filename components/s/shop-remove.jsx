import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xxswp1bkt.css';
import '../../css/h/h8y-n3_nj.css';
import '../../css/g/gn_7n3t9u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xxswp1bkt"/><path class="h8y-n3_nj"/><path class="gn_7n3t9u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shop-remove"} {...others} />);
}

export default Component;
