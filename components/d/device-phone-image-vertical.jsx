import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/okgz12nva.css';
import '../../css/z/zodq6nf7i.css';
import '../../css/f/fahs8gboc.css';
import '../../css/b/bq2tznbna.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="okgz12nva"/><path class="zodq6nf7i"/><path class="fahs8gboc"/><path class="bq2tznbna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-phone-image-vertical"} {...others} />);
}

export default Component;
