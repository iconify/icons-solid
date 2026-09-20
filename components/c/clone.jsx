import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdp245_wj.css';
import '../../css/t/ttyer50st.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="hdp245_wj"/><path class="ttyer50st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:clone"} {...others} />);
}

export default Component;
