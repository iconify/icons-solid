import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8d079btr.css';
import '../../css/r/rxqvapbkk.css';
import '../../css/t/t399ikbmi.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="z8d079btr"/><path class="rxqvapbkk"/><path class="t399ikbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:rust-solid"} {...others} />);
}

export default Component;
