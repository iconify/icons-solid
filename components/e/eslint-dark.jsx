import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_e-ddbdl.css';
import '../../css/d/dj5rh1r0q.css';

const viewBox = {"width":324,"height":285.096};
const content = `<path class="b_e-ddbdl"/><path class="dj5rh1r0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:eslint-dark"} {...others} />);
}

export default Component;
