import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/run4fcbjt.css';
import '../../css/y/y_7gziaml.css';
import '../../css/f/fzp0gcbsh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="run4fcbjt"/><path class="y_7gziaml"/><path class="fzp0gcbsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-multiple"} {...others} />);
}

export default Component;
