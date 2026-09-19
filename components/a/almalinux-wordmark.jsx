import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lic0zubgp.css';
import '../../css/s/sd6wvhbjo.css';
import '../../css/s/sq3x1_omd.css';
import '../../css/a/awkdkuo0b.css';
import '../../css/g/gz9w5tb2r.css';
import '../../css/f/frc49-blb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lic0zubgp"/><path class="sd6wvhbjo"/><path class="sq3x1_omd"/><path class="awkdkuo0b"/><path class="gz9w5tb2r"/><path class="frc49-blb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:almalinux-wordmark"} {...others} />);
}

export default Component;
