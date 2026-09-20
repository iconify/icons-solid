import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ab4vndb4j.css';
import '../../css/w/w_b7fnbhh.css';
import '../../css/c/c4ksf17xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ab4vndb4j"/><path clip-rule="evenodd" class="w_b7fnbhh"/><path class="c4ksf17xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:qr-code-light"} {...others} />);
}

export default Component;
