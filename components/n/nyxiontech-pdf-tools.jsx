import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucomdgbea.css';
import '../../css/m/m9uodidsu.css';
import '../../css/w/wx7rgmjkw.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="ucomdgbea"/><path class="m9uodidsu"/><circle class="wx7rgmjkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyxiontech-pdf-tools"} {...others} />);
}

export default Component;
