import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u723w4xsl.css';
import '../../css/w/wfmckqbpo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u723w4xsl"/><path class="wfmckqbpo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:broom-fill"} {...others} />);
}

export default Component;
