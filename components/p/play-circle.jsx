import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk6lt2bsx.css';
import '../../css/k/kiuf6hbjh.css';
import '../../css/o/om3-e-bbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uk6lt2bsx"/><circle transform="rotate(90 12 12)" class="kiuf6hbjh"/><path class="om3-e-bbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:play-circle"} {...others} />);
}

export default Component;
