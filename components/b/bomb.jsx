import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o05os2bzx.css';
import '../../css/f/fzj34vzin.css';
import '../../css/r/ru2z68b9q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="o05os2bzx"/><circle class="fzj34vzin"/><path class="ru2z68b9q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bomb"} {...others} />);
}

export default Component;
