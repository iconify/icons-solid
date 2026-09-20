import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgi6od49b.css';
import '../../css/f/fev25zbss.css';
import '../../css/c/cktwblots.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgi6od49b"/><path class="fev25zbss"/><path class="cktwblots"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:human-resources-search-employees-bold"} {...others} />);
}

export default Component;
