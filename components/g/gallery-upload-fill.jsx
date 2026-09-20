import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k70dj_bzt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k70dj_bzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:gallery-upload-fill"} {...others} />);
}

export default Component;
