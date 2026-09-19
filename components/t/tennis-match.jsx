import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k8zxj3bty.css';
import '../../css/m/mg2yoibod.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k8zxj3bty"/><path class="mg2yoibod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:tennis-match"} {...others} />);
}

export default Component;
