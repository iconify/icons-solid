import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/y/yl6j-sw3a.css';
import '../../css/o/o1wj90bvq.css';
import '../../css/w/wvy771dan.css';
import '../../css/z/zk8wz60ql.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG3kKZIdNq"><g class="aql7dnt-u"><path class="yl6j-sw3a"/><ellipse class="o1wj90bvq"/><ellipse class="wvy771dan"/><path class="zk8wz60ql"/></g></mask></defs><path mask="url(#SVG3kKZIdNq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tire-swing"} {...others} />);
}

export default Component;
