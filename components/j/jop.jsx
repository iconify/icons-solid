import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gul6c2bst.css';
import '../../css/l/lo5b6ob4a.css';
import '../../css/k/kmhzx59nw.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGnS3rkbHK" class="gul6c2bst"/></defs><path class="lo5b6ob4a"/><use href="#SVGnS3rkbHK"/><path class="kmhzx59nw"/><use href="#SVGnS3rkbHK"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:jop"} {...others} />);
}

export default Component;
