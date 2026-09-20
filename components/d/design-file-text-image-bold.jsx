import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wif79jbxv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wif79jbxv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:design-file-text-image-bold"} {...others} />);
}

export default Component;
