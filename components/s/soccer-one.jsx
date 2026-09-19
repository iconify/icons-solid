import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cflksfbjj.css';
import '../../css/m/mjfwmxbrm.css';
import '../../css/v/vsg7tgzjo.css';
import '../../css/v/va0oq6k-z.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGl5DUsIUC"><g class="ft5dv1b6b"><path class="cflksfbjj"/><path class="mjfwmxbrm"/><path class="vsg7tgzjo"/><path class="va0oq6k-z"/></g></mask></defs><path mask="url(#SVGl5DUsIUC)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:soccer-one"} {...others} />);
}

export default Component;
