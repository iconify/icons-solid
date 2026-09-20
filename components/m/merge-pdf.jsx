import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/svyq-bb9s.css';
import '../../css/n/nzwe5nggv.css';
import '../../css/u/uow4xdbqo.css';
import '../../css/u/umeb_xfoy.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="svyq-bb9s"/><path class="nzwe5nggv"/><path class="uow4xdbqo"/><path class="umeb_xfoy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:merge-pdf"} {...others} />);
}

export default Component;
