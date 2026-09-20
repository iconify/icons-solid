import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed42ny0st.css';
import '../../css/o/oa61y1bhx.css';
import '../../css/d/dx3pr7bai.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ed42ny0st"/><path class="oa61y1bhx"/><path class="dx3pr7bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-video-camera-film-1"} {...others} />);
}

export default Component;
