import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c-c82bbdh.css';
import '../../css/c/co9ypkbrw.css';
import '../../css/r/r301wefvw.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><path class="c-c82bbdh"/><path class="co9ypkbrw"/><path class="r301wefvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:pci-card-sound"} {...others} />);
}

export default Component;
