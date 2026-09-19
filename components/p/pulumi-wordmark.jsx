import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tacaomvbw.css';
import '../../css/c/ckfmp0bvq.css';
import '../../css/y/yi7l1_bae.css';
import '../../css/b/brv_2tt_f.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="tacaomvbw"/><path class="ckfmp0bvq"/><path class="yi7l1_bae"/><path class="brv_2tt_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:pulumi-wordmark"} {...others} />);
}

export default Component;
