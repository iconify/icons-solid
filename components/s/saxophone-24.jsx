import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/updm7mb5b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="updm7mb5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:saxophone-24"} {...others} />);
}

export default Component;
