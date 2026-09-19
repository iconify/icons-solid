import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqrc5kb9t.css';
import '../../css/g/gldcflbrm.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="lqrc5kb9t"/><path class="gldcflbrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:folder-poi-o"} {...others} />);
}

export default Component;
