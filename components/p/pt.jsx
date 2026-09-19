import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/r/rx-a2fb5l.css';
import '../../css/x/x8zqoxbpb.css';
import '../../css/f/f0-5240ey.css';
import '../../css/x/xw6cxxb2i.css';
import '../../css/x/xg8t7ibsn.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="rx-a2fb5l"/><path class="x8zqoxbpb"/><circle class="f0-5240ey"/><path class="xw6cxxb2i"/><path class="xg8t7ibsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:pt"} {...others} />);
}

export default Component;
