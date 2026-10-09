import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eoyqh5bdz.css';
import '../../css/s/swyl5jbbl.css';
import '../../css/g/g52f6mtwi.css';
import '../../css/c/c65-ehvfy.css';
import '../../css/f/fh9swnvjp.css';
import '../../css/v/vyac_xc2w.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="eoyqh5bdz"/><path class="swyl5jbbl"/><path class="g52f6mtwi"/><path class="c65-ehvfy"/><path class="fh9swnvjp"/><path class="vyac_xc2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bifacial-panel-48"} {...others} />);
}

export default Component;
