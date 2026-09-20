import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5dnc48bh.css';
import '../../css/e/em3y75frz.css';
import '../../css/p/pqc8yuf2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><circle class="o5dnc48bh"/><circle class="em3y75frz"/><path class="pqc8yuf2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:unordered-list-filled"} {...others} />);
}

export default Component;
