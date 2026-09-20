import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b5164f7lr.css';
import '../../css/p/py6b5zbjb.css';
import '../../css/y/y59jr9jhx.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="cuyn6tgcc"><path class="b5164f7lr"/><circle class="py6b5zbjb"/><circle class="y59jr9jhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:option"} {...others} />);
}

export default Component;
