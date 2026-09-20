import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsur1obse.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tr4-p2bbz.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><path id="SVGurOpSbYq" class="dsur1obse"/></defs><use href="#SVGurOpSbYq" clip-rule="evenodd" class="d2kvgvbvc"/><path class="tr4-p2bbz"/><use href="#SVGurOpSbYq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:mailbox-full-duotone"} {...others} />);
}

export default Component;
