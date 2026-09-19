import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/q/qtgswnn4u.css';
import '../../css/z/z78yszbru.css';
import '../../css/i/ilgfvfyit.css';
import '../../css/j/jv39n-c4r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGFpImBdtk"><g class="aql7dnt-u"><path class="qtgswnn4u"/><path class="z78yszbru"/><path class="ilgfvfyit"/><path class="jv39n-c4r"/></g></mask></defs><path mask="url(#SVGFpImBdtk)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:email-lock"} {...others} />);
}

export default Component;
