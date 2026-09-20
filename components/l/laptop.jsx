import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s5awmwr5a.css';
import '../../css/n/ndq30w6of.css';
import '../../css/s/spoulug9m.css';
import '../../css/i/itm218-id.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="s5awmwr5a"/><path class="ndq30w6of"/><path class="spoulug9m"/><path class="itm218-id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:laptop"} {...others} />);
}

export default Component;
