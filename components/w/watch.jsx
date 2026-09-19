import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/g/g92amxlfl.css';
import '../../css/b/b_iq5obiy.css';
import '../../css/j/jdh9hhorp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGcOaMObfg"><g class="aql7dnt-u"><path class="g92amxlfl"/><path class="b_iq5obiy"/><path class="jdh9hhorp"/></g></mask></defs><path mask="url(#SVGcOaMObfg)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:watch"} {...others} />);
}

export default Component;
