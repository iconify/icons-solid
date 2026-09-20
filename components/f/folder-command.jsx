import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2t00mbrv.css';
import '../../css/z/z3y6h9b-g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="p2t00mbrv"/><path class="z3y6h9b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-command"} {...others} />);
}

export default Component;
