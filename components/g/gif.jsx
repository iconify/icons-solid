import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fkba3m0qr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fkba3m0qr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:gif"} {...others} />);
}

export default Component;
