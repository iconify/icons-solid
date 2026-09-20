import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z6ynvvbvu.css';
import '../../css/l/l88n09zdv.css';
import '../../css/c/c9-xmobkl.css';
import '../../css/s/svmzo2bpb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><ellipse class="z6ynvvbvu"/><ellipse class="l88n09zdv"/><path class="c9-xmobkl"/><path class="svmzo2bpb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:pineapple-ring"} {...others} />);
}

export default Component;
