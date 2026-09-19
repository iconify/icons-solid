import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wcfp9s-0x.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGt6KFdcQE" class="wcfp9s-0x"/></defs><use href="#SVGt6KFdcQE"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:notice-push"} {...others} />);
}

export default Component;
