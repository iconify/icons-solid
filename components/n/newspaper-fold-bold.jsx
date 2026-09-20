import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p22nvzbrb.css';
import '../../css/b/b2249gzmx.css';
import '../../css/g/giwlvbxak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p22nvzbrb"/><path class="b2249gzmx"/><path class="giwlvbxak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:newspaper-fold-bold"} {...others} />);
}

export default Component;
