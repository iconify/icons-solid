import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dftf9rvck.css';
import '../../css/z/z3duhi67e.css';
import '../../css/c/c0f3cdbuc.css';
import '../../css/g/gnovq9q5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="dftf9rvck"/><path class="z3duhi67e"/><path class="c0f3cdbuc"/><path class="gnovq9q5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:atom"} {...others} />);
}

export default Component;
