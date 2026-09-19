import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lh3igdb-g.css';
import '../../css/x/xtkb3wptd.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lh3igdb-g"/><path class="xtkb3wptd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:argocd-wordmark"} {...others} />);
}

export default Component;
