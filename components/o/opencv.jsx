import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjxsglbxd.css';
import '../../css/b/bmmii1ffg.css';
import '../../css/i/izbfus17g.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="cjxsglbxd"/><path class="bmmii1ffg"/><path class="izbfus17g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:opencv"} {...others} />);
}

export default Component;
