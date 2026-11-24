import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfn12dn-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yfn12dn-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tent-filled"} {...others} />);
}

export default Component;
