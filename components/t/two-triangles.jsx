import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpa8ojhka.css';
import '../../css/c/cqng7jbzi.css';
import '../../css/q/qi1-x1b4y.css';
import '../../css/u/u3lpmgb1x.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGxuPy0dzJ"><g class="ft5dv1b6b"><path class="fpa8ojhka"/><path class="cqng7jbzi"/><path class="qi1-x1b4y"/><path class="u3lpmgb1x"/></g></mask></defs><path mask="url(#SVGxuPy0dzJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:two-triangles"} {...others} />);
}

export default Component;
