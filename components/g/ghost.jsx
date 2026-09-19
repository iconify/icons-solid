import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq_ua2hba.css';
import '../../css/l/l7pgvx7mc.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="kq_ua2hba"/><path class="l7pgvx7mc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:ghost"} {...others} />);
}

export default Component;
