import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftl45_bmq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ftl45_bmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-document-box-multiple-outline"} {...others} />);
}

export default Component;
