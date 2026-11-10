import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sci_dqbke.css';
import '../../css/n/nxkhmqbsa.css';
import '../../css/n/npjh9q8by.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="sci_dqbke"/><path class="nxkhmqbsa"/><path class="npjh9q8by"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-link"} {...others} />);
}

export default Component;
