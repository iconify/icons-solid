import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhyxh_bqu.css';
import '../../css/g/gcf5i_czd.css';
import '../../css/g/gq800qhcx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fhyxh_bqu"/><path class="gcf5i_czd"/><path class="gq800qhcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-stop-sign-2"} {...others} />);
}

export default Component;
