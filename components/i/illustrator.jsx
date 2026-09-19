import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fm581lbny.css';
import '../../css/v/v7vmxtb6b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="fm581lbny"/><path class="v7vmxtb6b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:illustrator"} {...others} />);
}

export default Component;
