import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed42ny0st.css';
import '../../css/o/oa61y1bhx.css';
import '../../css/f/fasmlpb0i.css';
import '../../css/p/plit5mb5e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ed42ny0st"/><path class="oa61y1bhx"/><path class="fasmlpb0i"/><path class="plit5mb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-video-camera-film-2"} {...others} />);
}

export default Component;
