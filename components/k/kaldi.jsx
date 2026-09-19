import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r1soy6buh.css';
import '../../css/c/cbl4o-biw.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="r1soy6buh"/><path class="cbl4o-biw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:kaldi"} {...others} />);
}

export default Component;
