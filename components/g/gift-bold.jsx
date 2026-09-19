import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/z/zavzvmbpq.css';
import '../../css/a/azcxndzqs.css';
import '../../css/k/kgseuybgc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="zavzvmbpq"/><path class="azcxndzqs"/><path class="kgseuybgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:gift-bold"} {...others} />);
}

export default Component;
