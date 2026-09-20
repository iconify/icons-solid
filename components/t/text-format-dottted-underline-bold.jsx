import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r7cmvbi9a.css';
import '../../css/s/s198agbbv.css';
import '../../css/b/bx5f9yspe.css';
import '../../css/e/ecw69kb6h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r7cmvbi9a"><path class="s198agbbv"/><path class="bx5f9yspe"/><path class="ecw69kb6h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:text-format-dottted-underline-bold"} {...others} />);
}

export default Component;
