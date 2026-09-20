import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/f/fqann9wgm.css';
import '../../css/j/ju2m-998g.css';
import '../../css/y/ybfbp-b2q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="fqann9wgm"/><path class="ju2m-998g"/><path class="ybfbp-b2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:synchronize-warning"} {...others} />);
}

export default Component;
