import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyfge-bjz.css';
import '../../css/m/md286fbip.css';
import '../../css/r/ruoa3lbgv.css';
import '../../css/n/n00myyeap.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="dyfge-bjz"/><g class="md286fbip"><path class="ruoa3lbgv"/><path class="n00myyeap"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:cix"} {...others} />);
}

export default Component;
