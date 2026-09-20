import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1t2h770l.css';
import '../../css/n/nbyo3qbsm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z1t2h770l"/><path class="nbyo3qbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:pass-through-16"} {...others} />);
}

export default Component;
