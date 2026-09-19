import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kb4m0fbdw.css';
import '../../css/n/n9oymbcwg.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="nrj6p8qat"><circle class="kb4m0fbdw"/><path class="n9oymbcwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:zoom-out"} {...others} />);
}

export default Component;
