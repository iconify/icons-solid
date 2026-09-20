import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkl81gx0s.css';
import '../../css/z/zhbt1i4-l.css';
import '../../css/l/l_2f5tbmq.css';
import '../../css/k/k6z303xxq.css';
import '../../css/c/c5f1r473i.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="nkl81gx0s"/><path class="zhbt1i4-l"/><path class="l_2f5tbmq"/><path class="k6z303xxq"/><path class="c5f1r473i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kapowarr"} {...others} />);
}

export default Component;
