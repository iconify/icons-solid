import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z-qdsac0c.css';
import '../../css/n/nc6mbcbuc.css';
import '../../css/b/bq3mgxata.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="z-qdsac0c"/><path class="nc6mbcbuc"/><path class="bq3mgxata"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-king-crown"} {...others} />);
}

export default Component;
