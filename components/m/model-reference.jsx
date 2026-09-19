import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftv6d47py.css';
import '../../css/k/kaj68m1tu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ftv6d47py"/><path class="kaj68m1tu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:model-reference"} {...others} />);
}

export default Component;
