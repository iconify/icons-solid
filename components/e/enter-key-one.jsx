import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/o/o5iwjqk2c.css';
import '../../css/i/ica7owv_k.css';
import '../../css/c/cjt33cblq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXqXvIril"><g class="aql7dnt-u"><path class="o5iwjqk2c"/><path class="ica7owv_k"/><path class="cjt33cblq"/></g></mask></defs><path mask="url(#SVGXqXvIril)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:enter-key-one"} {...others} />);
}

export default Component;
