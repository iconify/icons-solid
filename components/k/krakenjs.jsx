import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3apx84gf.css';

const viewBox = {"width":128,"height":128};
const content = `<path clip-rule="evenodd" class="n3apx84gf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:krakenjs"} {...others} />);
}

export default Component;
