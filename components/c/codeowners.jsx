import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/o/ogar2nbat.css';
import '../../css/r/rxmfttsiy.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="ogar2nbat"/><circle class="rxmfttsiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:codeowners"} {...others} />);
}

export default Component;
