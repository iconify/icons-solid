import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcpzljbeb.css';
import '../../css/j/jn9mjsb2g.css';
import '../../css/o/o9sdgwbjd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="bcpzljbeb clr-i-solid clr-i-solid-path-1"/><path class="clr-i-solid clr-i-solid-path-2 jn9mjsb2g"/><path class="clr-i-solid clr-i-solid-path-3 o9sdgwbjd"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:image-gallery-solid"} {...others} />);
}

export default Component;
