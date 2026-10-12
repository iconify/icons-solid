import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfwdc41th.css';
import '../../css/l/lci61mkfz.css';
import '../../css/a/a8kb4gb9t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="yfwdc41th"/><path class="lci61mkfz"/><path class="a8kb4gb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:file-search-stroke-20"} {...others} />);
}

export default Component;
