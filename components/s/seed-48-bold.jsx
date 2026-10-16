import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzqmkgkzn.css';
import '../../css/b/bz4e11bbe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="nzqmkgkzn"/><path class="bz4e11bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:seed-48-bold"} {...others} />);
}

export default Component;
