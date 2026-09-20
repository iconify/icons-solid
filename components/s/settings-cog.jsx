import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a78dyvbwf.css';
import '../../css/o/ooikihlll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a78dyvbwf"/><path class="ooikihlll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:settings-cog"} {...others} />);
}

export default Component;
