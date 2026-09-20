import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smkpeh00y.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="smkpeh00y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:editor-item-align-middle"} {...others} />);
}

export default Component;
