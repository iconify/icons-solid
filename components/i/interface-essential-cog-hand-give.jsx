import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3fk1nbuy.css';
import '../../css/z/zdy8trbye.css';
import '../../css/v/vzp2p0bja.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h3fk1nbuy"/><path class="zdy8trbye"/><path class="vzp2p0bja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-cog-hand-give"} {...others} />);
}

export default Component;
