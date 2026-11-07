import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3q7gcrgc.css';
import '../../css/z/zheflh_st.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r3q7gcrgc"/><path class="zheflh_st"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bug-bold"} {...others} />);
}

export default Component;
