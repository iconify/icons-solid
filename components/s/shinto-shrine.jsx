import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c33stpbjc.css';
import '../../css/a/a1-qyil8b.css';
import '../../css/v/vl_8m4bvp.css';
import '../../css/d/dxuto9-uf.css';
import '../../css/y/ymzf97azy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="c33stpbjc"/><path class="a1-qyil8b"/><path class="vl_8m4bvp"/><path class="dxuto9-uf"/><path class="ymzf97azy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shinto-shrine"} {...others} />);
}

export default Component;
