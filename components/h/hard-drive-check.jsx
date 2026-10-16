import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igmlgzbtz.css';
import '../../css/k/kyvk03wip.css';
import '../../css/t/tjdz9r0ba.css';
import '../../css/x/xs8xjf-_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="igmlgzbtz"/><path class="kyvk03wip"/><path class="tjdz9r0ba"/><path class="xs8xjf-_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hard-drive-check"} {...others} />);
}

export default Component;
