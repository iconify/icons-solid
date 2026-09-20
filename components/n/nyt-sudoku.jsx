import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpa-elmkg.css';
import '../../css/t/tvrv_ebup.css';
import '../../css/a/a0cnkibtv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cpa-elmkg"/><path class="tvrv_ebup"/><path class="a0cnkibtv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-sudoku"} {...others} />);
}

export default Component;
