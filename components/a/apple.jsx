import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf9kq2bup.css';
import '../../css/w/wmtrl-rww.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gf9kq2bup"/><path class="wmtrl-rww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:apple"} {...others} />);
}

export default Component;
