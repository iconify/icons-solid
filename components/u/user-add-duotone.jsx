import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7s8v2b0y.css';
import '../../css/c/czb0pkb7h.css';
import '../../css/c/ca4gnv9xj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="i7s8v2b0y"/><path clip-rule="evenodd" class="czb0pkb7h"/><path class="ca4gnv9xj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add-duotone"} {...others} />);
}

export default Component;
