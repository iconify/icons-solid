import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sol3rjohs.css';
import '../../css/e/emikm_bht.css';
import '../../css/z/z95hshg6i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="sol3rjohs"/><path class="emikm_bht"/><path class="z95hshg6i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:confused-face"} {...others} />);
}

export default Component;
