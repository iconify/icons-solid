import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kszgb5bkw.css';
import '../../css/x/x0man4b4w.css';
import '../../css/x/xcr_i7b-g.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="kszgb5bkw"/><path class="x0man4b4w"/><path class="xcr_i7b-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:aland-islands"} {...others} />);
}

export default Component;
