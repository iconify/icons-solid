import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kji3f8xww.css';
import '../../css/m/m0_ghw2pl.css';
import '../../css/i/ietn-5oir.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="kji3f8xww"/><circle class="m0_ghw2pl"/><path class="ietn-5oir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:systemd-light"} {...others} />);
}

export default Component;
