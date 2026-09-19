import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gux5og_2t.css';
import '../../css/m/mjz1r4_dm.css';
import '../../css/d/daxtkab1a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gux5og_2t"/><path class="mjz1r4_dm"/><path clip-rule="evenodd" class="daxtkab1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:adobe-indesign-outline"} {...others} />);
}

export default Component;
