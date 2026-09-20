import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oea5vwbvf.css';
import '../../css/f/fki8e6b1y.css';
import '../../css/z/znuomydyr.css';
import '../../css/c/cvucl6bkf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oea5vwbvf"/><circle class="fki8e6b1y"/><circle class="znuomydyr"/><circle class="cvucl6bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:yuvomi-dark"} {...others} />);
}

export default Component;
