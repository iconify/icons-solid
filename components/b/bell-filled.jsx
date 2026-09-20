import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/x/x5ao8m.css';
import '../../css/y/y4wbml.css';
import '../../css/j/jt6fjs.css';
import '../../css/g/ge04hr.css';
import '../../css/s/so-from-4.css';
import '../../css/s/so-to-0.css';
import '../../css/f/fill-to-1.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew x5ao8m y4wbml"/><path class="iw1iew jt6fjs"/><path class="ge04hr iw1iew y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:bell-filled"} {...others} />);
}

export default Component;
