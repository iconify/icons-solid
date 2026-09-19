import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zbkc8gbsi.css';
import '../../css/p/pbptyyb4z.css';
import '../../css/b/bxgre1bwl.css';
import '../../css/v/vmvr-ccup.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><g transform="translate(1)"><circle class="zbkc8gbsi"/><ellipse class="pbptyyb4z"/><path class="bxgre1bwl"/></g><path class="vmvr-ccup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:strolley-remove"} {...others} />);
}

export default Component;
