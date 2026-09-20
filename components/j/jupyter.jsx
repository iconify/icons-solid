import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ish5habrg.css';
import '../../css/o/oo48_6r0q.css';
import '../../css/x/xkadkob3k.css';
import '../../css/y/y92gimbip.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ish5habrg"/><circle class="oo48_6r0q"/><circle class="xkadkob3k"/><circle class="y92gimbip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:jupyter"} {...others} />);
}

export default Component;
