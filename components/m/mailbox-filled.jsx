import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwsgkxbib.css';
import '../../css/n/nalw8vbji.css';
import '../../css/j/jnrwwtxlf.css';
import '../../css/t/tqza-jbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="jwsgkxbib"/><path clip-rule="evenodd" class="nalw8vbji"/><path class="jnrwwtxlf"/><path clip-rule="evenodd" class="tqza-jbmx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:mailbox-filled"} {...others} />);
}

export default Component;
