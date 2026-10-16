import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3u1gj-mw.css';
import '../../css/w/wp3_6pk_p.css';
import '../../css/o/o2a-srg1g.css';

const viewBox = {"width":56,"height":70};
const content = `<defs><linearGradient id="SVGuBr77bNw" x1="0%" x2="100%" y1="20%" y2="120%"><stop offset="0%" class="x3u1gj-mw"/><stop offset="100%" class="wp3_6pk_p"/></linearGradient></defs><path fill="url(#SVGuBr77bNw)" class="o2a-srg1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:beszel"} {...others} />);
}

export default Component;
