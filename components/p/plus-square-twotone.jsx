import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h5auws.css';
import '../../css/i/iw1iew.css';
import '../../css/u/ufkpih.css';
import '../../css/y/y4wbml.css';
import '../../css/r/r7cc1y.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-66.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h5auws iw1iew"/><path class="iw1iew ufkpih y4wbml"/><path class="iw1iew r7cc1y y4wbml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:plus-square-twotone"} {...others} />);
}

export default Component;
