import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l2g4xxswo.css';
import '../../css/d/doqrq2blo.css';
import '../../css/u/uf8ttfzhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l2g4xxswo"/><path class="doqrq2blo"/><path class="uf8ttfzhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-build"} {...others} />);
}

export default Component;
