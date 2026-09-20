import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcpv0fbjf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kcpv0fbjf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:coding-apps-website-data-conversion-documents-2"} {...others} />);
}

export default Component;
