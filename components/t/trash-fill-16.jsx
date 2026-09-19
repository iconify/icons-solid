import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvpwvr8sq.css';
import '../../css/t/tgfroo5dd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qvpwvr8sq"/><path class="tgfroo5dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:trash-fill-16"} {...others} />);
}

export default Component;
