import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gnv5hp48c.css';
import '../../css/c/cdqyxub-y.css';
import '../../css/k/k53w0sboq.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="gnv5hp48c"/><path class="cdqyxub-y"/><path class="k53w0sboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:cursor-arrow-ripple-20-solid"} {...others} />);
}

export default Component;
