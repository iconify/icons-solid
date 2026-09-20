import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da1i54d5m.css';
import '../../css/z/z3y6h9b-g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="da1i54d5m"/><path class="z3y6h9b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-command-open"} {...others} />);
}

export default Component;
