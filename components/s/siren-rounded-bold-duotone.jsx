import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us865h93z.css';
import '../../css/v/vomzvikmg.css';
import '../../css/m/md29iac7z.css';
import '../../css/b/baz-86b8z.css';
import '../../css/o/oi41mr3fe.css';
import '../../css/v/vwazgn8zx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us865h93z"/><path class="vomzvikmg"/><path class="md29iac7z"/><path class="baz-86b8z"/><path class="oi41mr3fe"/><path class="vwazgn8zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:siren-rounded-bold-duotone"} {...others} />);
}

export default Component;
