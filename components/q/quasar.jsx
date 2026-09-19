import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bwxd6gr7h.css';
import '../../css/g/g-drd0b-w.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="bwxd6gr7h"/><path class="g-drd0b-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:quasar"} {...others} />);
}

export default Component;
