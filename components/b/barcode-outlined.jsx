import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ax3vvj-ye.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ax3vvj-ye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:barcode-outlined"} {...others} />);
}

export default Component;
