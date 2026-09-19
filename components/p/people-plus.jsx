import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmhlnubfi.css';
import '../../css/e/eyrri5bfj.css';
import '../../css/u/u6ja47b5r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG8Lj3pb0C"><g class="ft5dv1b6b"><path class="nmhlnubfi"/><path clip-rule="evenodd" class="eyrri5bfj"/><path class="u6ja47b5r"/></g></mask></defs><path mask="url(#SVG8Lj3pb0C)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:people-plus"} {...others} />);
}

export default Component;
