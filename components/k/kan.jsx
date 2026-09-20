import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxr4hec5a.css';
import '../../css/z/zwxltobxg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uxr4hec5a"/><path class="zwxltobxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kan"} {...others} />);
}

export default Component;
