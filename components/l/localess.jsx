import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ncgeo_vzx.css';
import '../../css/g/glg0knb5a.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ncgeo_vzx"/><path class="glg0knb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:localess"} {...others} />);
}

export default Component;
