import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/a/afbu4abru.css';
import '../../css/i/i1nrbeb_w.css';
import '../../css/i/i_yw9nbru.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="afbu4abru"/><path class="i1nrbeb_w"/><path class="i_yw9nbru"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:polygonal-lasso-tool"} {...others} />);
}

export default Component;
