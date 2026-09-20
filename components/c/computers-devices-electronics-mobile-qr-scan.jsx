import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb4udim1u.css';
import '../../css/i/i1kci5b0n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="eb4udim1u"/><path class="i1kci5b0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:computers-devices-electronics-mobile-qr-scan"} {...others} />);
}

export default Component;
