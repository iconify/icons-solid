import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/b8ybkilnt.css';
import '../../css/o/ovhtyslht.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="b8ybkilnt"/><path class="ovhtyslht"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:dislike3"} {...others} />);
}

export default Component;
