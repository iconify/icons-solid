import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/outf-abwk.css';
import '../../css/g/gd4eslbof.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="outf-abwk"/><path class="gd4eslbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:mailbox-empty-light"} {...others} />);
}

export default Component;
