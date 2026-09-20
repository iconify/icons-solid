import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw1iew.css';
import '../../css/s/senrzp.css';
import '../../css/c/c5crzc.css';
import '../../css/y/y4wbml.css';
import '../../css/y/y8_5_i.css';
import '../../css/s/sqhhwo.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw1iew senrzp"/><path class="c5crzc iw1iew y4wbml"/><path class="iw1iew y4wbml y8_5_i"/><path class="iw1iew sqhhwo y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:text-box-twotone"} {...others} />);
}

export default Component;
