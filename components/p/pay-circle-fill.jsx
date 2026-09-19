import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-99x8bls.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="u-99x8bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:pay-circle-fill"} {...others} />);
}

export default Component;
