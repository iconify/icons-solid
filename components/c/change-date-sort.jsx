import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/j/jln6cr7tu.css';
import '../../css/n/n0bqlyblr.css';
import '../../css/a/au5umtbww.css';
import '../../css/d/d43vakbgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="jln6cr7tu"/><path class="n0bqlyblr"/><path class="au5umtbww"/><path class="d43vakbgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:change-date-sort"} {...others} />);
}

export default Component;
