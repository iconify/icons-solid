import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cmzuzpb3v.css';
import '../../css/o/o7gsu44wi.css';
import '../../css/s/s5-crub1t.css';
import '../../css/g/gf3twj98y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cmzuzpb3v wm-shadow"/><path class="o7gsu44wi wm-shadow"/><path class="s5-crub1t"/><path class="gf3twj98y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:git-commit"} {...others} />);
}

export default Component;
