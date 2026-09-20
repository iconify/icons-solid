import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdzjk4bvt.css';
import '../../css/o/osqzglbdy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qdzjk4bvt"/><path clip-rule="evenodd" class="osqzglbdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:keyboard-16"} {...others} />);
}

export default Component;
