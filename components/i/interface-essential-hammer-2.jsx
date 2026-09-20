import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vykvzn64z.css';
import '../../css/e/em281wrxd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vykvzn64z"/><path class="em281wrxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-hammer-2"} {...others} />);
}

export default Component;
