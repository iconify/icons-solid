import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e41ewtu4w.css';
import '../../css/u/ugu7c3b_j.css';
import '../../css/n/n1g7deb0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e41ewtu4w"/><path class="ugu7c3b_j"/><path class="n1g7deb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:retail-api"} {...others} />);
}

export default Component;
