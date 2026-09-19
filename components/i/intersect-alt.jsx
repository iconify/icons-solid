import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v0po0fbov.css';
import '../../css/z/z5i370bbi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v0po0fbov"/><path class="z5i370bbi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:intersect-alt"} {...others} />);
}

export default Component;
