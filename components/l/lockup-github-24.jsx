import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn4spobzw.css';
import '../../css/g/gu1h78e1r.css';
import '../../css/b/bx3clim8s.css';

const viewBox = {"width":103,"height":24};
const content = `<path class="kn4spobzw"/><path class="gu1h78e1r"/><path class="bx3clim8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:lockup-github-24"} {...others} />);
}

export default Component;
