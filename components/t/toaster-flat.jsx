import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dd6gkfwme.css';
import '../../css/z/zi7qyobeq.css';
import '../../css/h/hjezvpw5i.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dd6gkfwme"/><path class="zi7qyobeq"/><path class="hjezvpw5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:toaster-flat"} {...others} />);
}

export default Component;
