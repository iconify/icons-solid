import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uonaj7pjo.css';
import '../../css/c/co0ht96wt.css';
import '../../css/y/y7_6mjbby.css';
import '../../css/t/tpe7y9_qe.css';
import '../../css/y/y191h8bws.css';
import '../../css/l/l-lk7bcts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uonaj7pjo"/><path class="co0ht96wt"/><path class="y7_6mjbby"/><path class="tpe7y9_qe"/><path class="y191h8bws"/><path class="l-lk7bcts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brain-question"} {...others} />);
}

export default Component;
