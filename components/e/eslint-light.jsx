import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm0dn2bvw.css';
import '../../css/v/vhsa93b5g.css';

const viewBox = {"width":324,"height":285.096};
const content = `<path class="bm0dn2bvw"/><path class="vhsa93b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:eslint-light"} {...others} />);
}

export default Component;
