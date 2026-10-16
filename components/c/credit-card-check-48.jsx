import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z2sfo7bun.css';
import '../../css/i/i8lgm5omt.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z2sfo7bun"/><path class="i8lgm5omt"/><path class="z4sj3ixdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:credit-card-check-48"} {...others} />);
}

export default Component;
