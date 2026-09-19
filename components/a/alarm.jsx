import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b54a1v37f.css';
import '../../css/y/ymjeb9z3t.css';
import '../../css/d/dngz4nbwj.css';

const viewBox = {"width":17,"height":17};
const content = `<g class="cuyn6tgcc"><path class="b54a1v37f"/><path clip-rule="evenodd" class="ymjeb9z3t"/><path class="dngz4nbwj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:alarm"} {...others} />);
}

export default Component;
