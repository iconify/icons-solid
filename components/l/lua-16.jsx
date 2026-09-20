import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qudowwo1l.css';
import '../../css/r/rvdw2qbco.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qudowwo1l"/><path class="rvdw2qbco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nonicons:lua-16"} {...others} />);
}

export default Component;
