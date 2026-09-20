import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cibmyoejo.css';
import '../../css/t/tj7kutb3g.css';
import '../../css/t/t0c6ekb-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cibmyoejo"/><path class="tj7kutb3g"/><path class="t0c6ekb-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cos"} {...others} />);
}

export default Component;
