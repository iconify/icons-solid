import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/je-ebn_6t.css';
import '../../css/d/demeb0pia.css';
import '../../css/l/lhdq9b2hk.css';
import '../../css/q/qi9ec6bnm.css';
import '../../css/i/i15h1ibuj.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="je-ebn_6t"/><path class="demeb0pia"/><path class="lhdq9b2hk"/><path class="qi9ec6bnm"/><path class="i15h1ibuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:kazakhstan"} {...others} />);
}

export default Component;
