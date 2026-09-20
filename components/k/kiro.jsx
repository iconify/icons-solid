import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3rsgcczs.css';
import '../../css/g/ghc79-30g.css';
import '../../css/l/lxc3j5b5v.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="e3rsgcczs"/><path class="ghc79-30g"/><path class="lxc3j5b5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kiro"} {...others} />);
}

export default Component;
