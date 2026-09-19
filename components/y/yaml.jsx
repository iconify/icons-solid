import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ehev_nbyn.css';
import '../../css/l/l028m6bye.css';
import '../../css/f/fr-8w9hqb.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ehev_nbyn"/><path class="l028m6bye"/><path class="fr-8w9hqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:yaml"} {...others} />);
}

export default Component;
