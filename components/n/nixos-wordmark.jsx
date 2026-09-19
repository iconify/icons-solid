import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-lopnnqb.css';
import '../../css/w/win9rhm6g.css';
import '../../css/n/nrkn4rbjl.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="n-lopnnqb"/><path clip-rule="evenodd" class="win9rhm6g"/><path class="nrkn4rbjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nixos-wordmark"} {...others} />);
}

export default Component;
