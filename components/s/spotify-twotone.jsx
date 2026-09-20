import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hzcwhu.css';
import '../../css/l/l13gug.css';
import '../../css/w/w5j5uc.css';
import '../../css/y/y4wbml.css';
import '../../css/n/nv-v8y.css';
import '../../css/t/tokjwc.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hzcwhu l13gug"/><path class="hzcwhu w5j5uc y4wbml"/><path class="hzcwhu nv-v8y y4wbml"/><path class="hzcwhu tokjwc y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:spotify-twotone"} {...others} />);
}

export default Component;
