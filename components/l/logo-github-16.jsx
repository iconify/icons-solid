import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtge9yb3h.css';
import '../../css/z/z_6r0ejay.css';
import '../../css/n/nnagpvtvx.css';

const viewBox = {"width":49,"height":16};
const content = `<path class="gtge9yb3h"/><path class="z_6r0ejay"/><path class="nnagpvtvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:logo-github-16"} {...others} />);
}

export default Component;
