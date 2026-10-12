import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bu-tuu-sv.css';
import '../../css/c/ccjm19bqx.css';
import '../../css/t/tgmbnfbzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(0 1 1 0 2.65 2.8)" class="bu-tuu-sv"/><rect transform="matrix(0 1 1 0 2.65 2.8)" class="ccjm19bqx"/><path class="tgmbnfbzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slash-inverted-square"} {...others} />);
}

export default Component;
