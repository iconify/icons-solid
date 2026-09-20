import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/lk0esnb3a.css';
import '../../css/k/kshc3bn2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="lk0esnb3a"/><path class="kshc3bn2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:video-add"} {...others} />);
}

export default Component;
