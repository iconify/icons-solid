import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/i9sayvl3a.css';
import '../../css/e/ei2rqmvqu.css';
import '../../css/y/yx06r2bfh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="i9sayvl3a"/><path class="ei2rqmvqu"/><path class="yx06r2bfh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:advertising-money-idea"} {...others} />);
}

export default Component;
