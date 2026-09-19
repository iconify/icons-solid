import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nln80aciw.css';
import '../../css/k/k01r6evgn.css';
import '../../css/k/kk0hmeb4g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nln80aciw"/><path class="k01r6evgn"/><path class="kk0hmeb4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:sustainability"} {...others} />);
}

export default Component;
