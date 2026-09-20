import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mij6dpb5b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mij6dpb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:restore-backup-pc"} {...others} />);
}

export default Component;
