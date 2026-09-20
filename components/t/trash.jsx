import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6gtnxgyh.css';
import '../../css/g/gsv3t-buj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z6gtnxgyh"/><path class="gsv3t-buj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:trash"} {...others} />);
}

export default Component;
