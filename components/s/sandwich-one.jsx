import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/ku8judboj.css';
import '../../css/o/o26dknb6b.css';
import '../../css/l/lmj8o9bfu.css';
import '../../css/i/ifpzbub1f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="ku8judboj"/><path class="o26dknb6b"/><rect transform="rotate(-45 5.071 33.071)" class="lmj8o9bfu"/><path class="ifpzbub1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sandwich-one"} {...others} />);
}

export default Component;
