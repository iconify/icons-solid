import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n5wleyipv.css';
import '../../css/u/uxlky7uhp.css';
import '../../css/c/cq11jcb9k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n5wleyipv"/><path class="uxlky7uhp"/><path class="cq11jcb9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:sonarqube-wordmark"} {...others} />);
}

export default Component;
