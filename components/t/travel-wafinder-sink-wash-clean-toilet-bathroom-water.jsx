import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdmf3g-ko.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zdmf3g-ko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-wafinder-sink-wash-clean-toilet-bathroom-water"} {...others} />);
}

export default Component;
