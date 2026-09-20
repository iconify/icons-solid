import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cggeh_puv.css';
import '../../css/l/lx9txg18g.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="cggeh_puv"/><path class="lx9txg18g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:small-blue-diamond"} {...others} />);
}

export default Component;
