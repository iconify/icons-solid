import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ceknmg57b.css';
import '../../css/a/agohndbfp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ceknmg57b"/><path class="agohndbfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:repo-pull-24"} {...others} />);
}

export default Component;
