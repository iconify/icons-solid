import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gndrgobtu.css';
import '../../css/v/vagvi2bms.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gndrgobtu"/><path class="vagvi2bms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:bookmarks-document-alternate-bold"} {...others} />);
}

export default Component;
