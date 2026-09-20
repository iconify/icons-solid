import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gn4zp1bkf.css';
import '../../css/a/anndn7kya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gn4zp1bkf"/><path class="anndn7kya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:qr-code-fill"} {...others} />);
}

export default Component;
