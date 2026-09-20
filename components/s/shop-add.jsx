import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xxswp1bkt.css';
import '../../css/h/h8y-n3_nj.css';
import '../../css/z/ze0ey8bkw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xxswp1bkt"/><path class="h8y-n3_nj"/><path class="ze0ey8bkw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:shop-add"} {...others} />);
}

export default Component;
