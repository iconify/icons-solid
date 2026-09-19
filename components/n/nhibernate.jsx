import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aecai_kku.css';
import '../../css/g/g-d1ckdau.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="aecai_kku"/><path class="g-d1ckdau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:nhibernate"} {...others} />);
}

export default Component;
